import { useState, useEffect, useRef } from 'react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string, text: string }[]>([
    {
      sender: 'bot',
      text: "Welcome to Mirza Multispeciality Hospital! May I know your name to assist you better?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [isOnline, setIsOnline] = useState(true); // Added online status state
  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatId = useRef<string>(crypto.randomUUID());
  const tooltipTimeoutRef = useRef<NodeJS.Timeout>();

  const systemPrompt = `
    You are the helpful AI assistant of Mirza Multispeciality Hospital. Your role is to guide visitors, answer questions politely, and provide useful information about the hospital's services. Speak clearly and compassionately like a caring medical staff member. Do not use medical jargon. Your answers should sound warm, human, and empathetic.
    Begin by asking the user's name so you can address them personally in the conversation.
    🏥 About: Mirza Multispeciality Hospital provides high-quality, patient-centric healthcare with personalized attention and care.
    🩺 Services:
    - General Medicine
    - Pediatrics
    - Gynecology
    - Orthopedics
    - Cardiology
    - Dermatology
    - ENT
    - Physiotherapy
    - Radiology
    - Pathology
    👨‍⚕️ Medical Team: A dedicated team of experienced specialists committed to excellent care.
    🏥 Facilities: State-of-the-art medical tech and a modern, safe, patient-friendly environment.
    📍 Location: Tech City, Mirza, Near IITG, Bongora, Guwahati, Assam-781015
    📞 Contact: +91 8011673568 / +91 8011260929
  `;

  useEffect(() => {
    // Hide tooltip after 5 seconds
    tooltipTimeoutRef.current = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);

    return () => {
      if (tooltipTimeoutRef.current) {
        clearTimeout(tooltipTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const sendToWebSocket = (message: string) => {
    const websocket = new WebSocket('wss://backend.buildpicoapps.com/api/chatbot/chat');
    setIsTyping(true);
    let botMessage = '';

    websocket.onopen = () => {
      setIsOnline(true); // Set online status when connection opens
      websocket.send(JSON.stringify({
        chatId: chatId.current,
        appId: 'fire-person',
        systemPrompt,
        message
      }));
    };

    websocket.onmessage = (event) => {
      botMessage += event.data;
    };

    websocket.onclose = () => {
      setIsTyping(false);
      if (botMessage.trim()) {
        setMessages(prev => [...prev, { sender: 'bot', text: botMessage }]);
      } else {
        setMessages(prev => [...prev, { sender: 'bot', text: 'Oops! No response received.' }]);
      }
    };

    websocket.onerror = () => {
      setIsOnline(false); // Set offline status on error
      setMessages(prev => [...prev, { sender: 'bot', text: 'Connection error. Please try again later.' }]);
      setIsTyping(false);
    };
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    sendToWebSocket(input);
    setInput('');
  };

  return (
    <>
      {/* Chat Button */}
      <button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-white border-2 border-teal shadow-lg flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat with Mirza AI"
      >
        <img
          src="/chatbot-icon.png"
          alt="Chat Icon"
          className="w-10 h-10"
        />
      </button>

      {/* Tooltip - now only shows temporarily */}
      {!isOpen && showTooltip && (
        <div className="fixed bottom-24 right-6 bg-white text-teal px-4 py-2 rounded shadow z-50">
          <p className="text-sm">Ask MMH AI Assistant</p>
        </div>
      )}

      {/* Chatbox */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 h-[480px] bg-white rounded-xl shadow-xl flex flex-col overflow-hidden z-50">
          {/* Header */}
          <div className="bg-teal text-white p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-base text-white">Mirza Multispeciality Hospital AI Chatbot</h3>  
                <p className="text-xs opacity-80">Ask me anything about our hospital</p>
              </div>
              {/* Online status indicator */}
              <div className="flex items-center">
                <span className={`w-2 h-2 rounded-full mr-1 ${isOnline ? 'bg-green-400' : 'bg-red-400'}`}></span>
                <span className="text-xs">{isOnline ? 'Online' : 'Offline'}</span>
              </div>
            </div>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-teal text-white rounded-tr-none'
                      : 'bg-gray-200 text-black rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-black p-3 rounded-lg rounded-tl-none">
                  Typing...
                </div>
              </div>
            )}
            <div ref={chatEndRef}></div>
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-3 border-t bg-white">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 border px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-teal"
                placeholder="Type your message..."
              />
              <button
                type="submit"
                className="bg-teal text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-teal-600 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3 3l18 9-18 9 3-9z" />
                </svg>
              </button>
            </div>
          </form>

          {/* Powered By */}
          <div className="text-center text-xs text-gray-500 py-1 bg-gray-50 border-t">
            Powered by <span className="font-semibold text-teal-600">Growvaa</span>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
