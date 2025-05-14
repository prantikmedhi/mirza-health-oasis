import { useState, useEffect, useRef } from 'react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string, text: string }[]>([
    { sender: 'bot', text: "Hello! I'm Bugs Bunny! What's your name, doc?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatId = useRef<string>(crypto.randomUUID());

  const systemPrompt = `
You are the helpful AI assistant of Mirza Multispeciality Hospital. Your role is to guide visitors, answer questions politely, and provide useful information about the hospital’s services. Speak clearly and compassionately like a caring medical staff member. Do not use medical jargon. Your answers should sound warm, human, and empathetic.

Begin by asking the user's name so you can address them personally in the conversation.

Here’s some context about the hospital you should use when responding:

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

You should not answer deep medical questions—just help users book appointments, find services, or learn about the hospital.
`;
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const sendToWebSocket = (message: string) => {
    const websocket = new WebSocket('wss://backend.buildpicoapps.com/api/chatbot/chat');
    setIsTyping(true);

    websocket.onopen = () => {
      websocket.send(JSON.stringify({
        chatId: chatId.current,
        appId: "fire-person",
        systemPrompt,
        message
      }));
    };

    websocket.onmessage = (event) => {
      const text = event.data;
      setMessages(prev => [...prev, { sender: 'bot', text }]);
      setIsTyping(false);
    };

    websocket.onerror = () => {
      setMessages(prev => [...prev, { sender: 'bot', text: 'Oops! Something went wrong. Try again later.' }]);
      setIsTyping(false);
    };

    websocket.onclose = () => {
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
      <button 
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-teal text-white shadow-lg flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat with AI"
      >
        {isOpen ? '×' : '?'}
      </button>

      {!isOpen && (
        <div className="fixed bottom-24 right-6 bg-white text-teal px-4 py-2 rounded shadow z-50">
          <p className="text-sm">Personalize your AI below</p>
        </div>
      )}

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 h-96 bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
          <div className="bg-teal text-white p-4">
            <h3 className="text-lg font-semibold">Bugs Bunny AI</h3>
            <p className="text-xs">Ask questions and get fun hints!</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 rounded-lg ${msg.sender === 'user' ? 'bg-teal text-white' : 'bg-gray-200 text-black'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-black p-3 rounded-lg">Typing...</div>
              </div>
            )}
            <div ref={chatEndRef}></div>
          </div>

          <form onSubmit={handleSendMessage} className="p-3 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                className="flex-1 border px-4 py-2 rounded-full"
                placeholder="Type your message..."
              />
              <button
                type="submit"
                className="bg-teal text-white px-4 py-2 rounded-full"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
