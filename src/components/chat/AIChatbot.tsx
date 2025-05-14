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
  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatId = useRef<string>(crypto.randomUUID());

  const systemPrompt = `
    You are the helpful AI assistant of Mirza Multispeciality Hospital. Your role is to guide visitors, answer questions politely, and provide useful information about the hospital’s services. Speak clearly and compassionately like a caring medical staff member. Do not use medical jargon. Your answers should sound warm, human, and empathetic.
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
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const sendToWebSocket = (message: string) => {
    const websocket = new WebSocket('wss://backend.buildpicoapps.com/api/chatbot/chat');
    setIsTyping(true);
    let botMessage = '';

    websocket.onopen = () => {
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
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="300.000000pt"
    height="300.000000pt"
    viewBox="0 0 300.000000 300.000000"
    preserveAspectRatio="xMidYMid meet"
    className="w-8 h-8"
  >
    <g transform="translate(0.000000, 300.000000) scale(0.100000, -0.100000)" fill="#000000" stroke="none">
      <path d="M1320 2940 c-625 -87 -1108 -535 -1242 -1153 -19 -85 -22 -133 -22 -292 0 -173 3 -201 28 -310 33 -140 60 -217 121 -336 200 -398 570 -681 1015 -776 122 -26 440 -26 560 1 446 97 817 382 1015 781 63 128 95 220 126 365 29 137 32 397 6 538 -109 579 -558 1039 -1135 1162 -111 24 -366 35 -472 20z m377 -46 c467 -69 856 -350 1068 -774 48 -95 94 -232 121 -360 28 -128 26 -400 -4 -537 -123 -569 -553 -996 -1119 -1110 -126 -25 -415 -25 -533 1 -403 87 -722 335 -901 701 -98 200 -137 395 -126 624 8 150 32 265 85 398 150 384 301 717 622 922 288 186 632 261 962 212z"/>
      <path d="M1266 2784 c-252 -45 -483 -165 -675 -349 -204 -197 -338 -446 -386 -719 -19 -114 -19 -324 0 -446 67 -413 344 -779 730 -965 169 -81 312 -115 515 -122 172 -6 298 10 446 58 441 141 766 490 881 946 25 98 28 125 28 293 0 249 -32 395 -130 591 -186 375 -542 643 -949 714 -111 19 -351 19 -460 -1z m532 -48 c430 -108 764 -412 911 -828 49 -142 65 -243 65 -423 1 -177 -13 -265 -66 -415 -151 -427 -522 -749 -965 -837 -124 -24 -377 -24 -493 1 -403 87 -722 335 -901 701 -98 200 -137 395 -126 624 8 150 32 265 85 398 150 384 475 672 872 773 132 34 186 39 355 35 130 -3 179 -8 263 -29z"/>
      {/* Other path elements */}
    </g>
  </svg>
</button>

      {/* Tooltip */}
      {!isOpen && (
        <div className="fixed bottom-24 right-6 bg-white text-teal px-4 py-2 rounded shadow z-50">
          <p className="text-sm">Ask Mirza AI Assistant</p>
        </div>
      )}

      {/* Chatbox */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 h-[480px] bg-white rounded-xl shadow-xl flex flex-col overflow-hidden z-50">
          {/* Header */}
          <div className="bg-teal text-white p-4">
            <h3 className="font-semibold text-base">Mirza Multispeciality Hospital AI Chatbot</h3>
            <p className="text-xs opacity-80">Ask me anything about our hospital</p>
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
