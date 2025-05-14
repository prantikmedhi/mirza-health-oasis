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
      if (botMessage.trim()) {
        setMessages(prev => [...prev, { sender: 'bot', text: botMessage }]);
      } else {
        setMessages(prev => [...prev, { sender: 'bot', text: 'Oops! No response received.' }]);
      }
      setIsTyping(false);
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
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="300.000000pt" height="300.000000pt" viewBox="0 0 300.000000 300.000000" preserveAspectRatio="xMidYMid meet" className="w-8 h-8">
  <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
    <path d="M1320 2940 c-625 -87 -1108 -535 -1242 -1153 -19 -85 -22 -133 -22 -292 0 -173 3 -201 28 -310 33 -140 60 -217 121 -336 200 -398 570 -681 1015 -776 122 -26 440 -26 560 1 446 97 817 382 1015 781 63 128 95 220 126 365 29 137 32 397 6 538 -109 579 -558 1039 -1135 1162 -111 24 -366 35 -472 20z m377 -46 c467 -69 856 -350 1068 -774 48 -95 94 -232 121 -360 28 -128 26 -400 -4 -537 -123 -569 -553 -996 -1119 -1110 -126 -25 -415 -25 -533 1 -291 63 -521 187 -725 391 -202 201 -326 428 -387 708 -29 136 -32 417 -5 547 83 392 301 717 622 922 288 186 632 261 962 212z"/>
    <path d="M1266 2784 c-252 -45 -483 -165 -675 -349 -204 -197 -338 -446 -386 -719 -19 -114 -19 -324 0 -446 67 -413 344 -779 730 -965 169 -81 312 -115 515 -122 172 -6 298 10 446 58 441 141 766 490 881 946 25 98 28 125 28 293 0 249 -32 395 -130 591 -186 375 -542 643 -949 714 -111 19 -351 19 -460 -1z m532 -48 c430 -108 764 -412 911 -828 49 -142 65 -243 65 -423 1 -177 -13 -265 -66 -415 -151 -427 -522 -749 -965 -837 -124 -24 -377 -24 -493 1 -403 87 -722 335 -901 701 -98 200 -137 395 -126 624 8 150 32 265 85 398 150 384 475 672 872 773 132 34 186 39 355 35 130 -3 179 -8 263 -29z"/>
    <path d="M1195 2261 c-57 -14 -104 -43 -151 -93 l-46 -50 4 -76 c6 -92 38 -173 80 -203 16 -12 31 -19 34 -17 2 3 -1 29 -7 57 -29 136 63 261 191 261 53 0 121 -31 155 -72 l25 -30 27 33 c52 61 153 86 226 55 46 -19 89 -68 110 -124 l17 -47 -6 55 c-12 117 -74 202 -174 235 -64 21 -111 11 -164 -36 l-35 -30 -45 35 c-63 48 -159 67 -241 47z m214 -69 c29 -17 61 -32 71 -32 11 0 41 14 67 31 42 27 54 30 97 25 50 -5 96 -28 96 -47 0 -6 -9 -7 -22 -3 -57 18 -172 -9 -218 -51 -13 -12 -19 -12 -40 0 -108 63 -184 74 -256 37 -70 -36 -134 -128 -134 -191 0 -16 -5 -33 -10 -36 -25 -16 -43 122 -22 175 18 46 76 96 137 118 17 6 64 10 106 9 66 -2 82 -6 128 -35z"/>
    <path d="M1745 2237 c44 -18 89 -38 100 -44 38 -21 84 -78 111 -137 94 -207 -25 -490 -278 -658 -125 -83 -117 -86 -117 46 1 235 -58 389 -213 552 -47 49 -33 64 27 31 35 -20 69 -57 173 -186 92 -114 228 -124 296 -21 30 46 48 125 38 170 -8 34 -8 33 -15 -24 -14 -113 -63 -183 -135 -193 -73 -10 -120 27 -255 197 -56 71 -106 100 -174 100 -85 0 -91 -8 -35 -46 118 -79 228 -254 257 -407 16 -85 19 -213 6 -290 -9 -57 -13 -57 103 13 171 103 276 215 339 360 30 71 32 82 32 195 0 111 -2 125 -28 181 -51 109 -146 179 -260 190 l-52 5 80 -34z"/>
    <path d="M970 2054 c-6 -14 -15 -56 -21 -94 -20 -116 16 -245 101 -374 77 -114 179 -197 373 -304 l57 -32 0 26 c0 41 -17 62 -78 93 -123 62 -189 127 -218 212 -13 37 -13 44 2 66 15 23 20 25 63 18 67 -10 101 -9 113 3 28 28 -108 113 -202 128 -60 9 -94 27 -123 66 -33 44 -50 101 -50 165 0 29 -2 53 -4 53 -2 0 -8 -12 -13 -26z m80 -242 c23 -19 91 -49 130 -57 39 -8 86 -30 95 -44 3 -6 -11 -9 -34 -8 -30 1 -47 -5 -65 -22 -35 -33 -39 -63 -18 -125 l18 -54 -23 15 c-62 41 -158 221 -169 319 l-7 59 29 -35 c16 -19 36 -41 44 -48z"/>
    <path d="M1638 1992 c-88 -79 23 -214 116 -141 37 29 47 59 35 103 -18 66 -96 86 -151 38z m105 -14 c9 -7 19 -25 22 -40 8 -33 -31 -78 -69 -78 -25 0 -66 41 -66 65 0 7 9 24 21 39 22 28 64 35 92 14z"/>
    <path d="M1244 1581 c12 -19 77 -56 139 -79 57 -22 57 -22 57 -2 0 22 -26 36 -120 65 -30 9 -61 19 -69 22 -9 4 -11 1 -7 -6z"/>
    <path d="M1220 1551 c0 -43 251 -204 258 -166 6 28 -34 60 -104 85 -37 13 -86 38 -110 56 -24 19 -44 30 -44 25z"/>
    <path d="M1000 1075 l0 -105 31 0 c30 0 31 2 25 31 -3 17 -6 43 -6 58 0 20 -2 23 -10 11 -7 -11 -10 -5 -10 23 0 20 4 37 10 37 12 0 29 -31 24 -45 -6 -16 40 -89 57 -93 14 -3 65 83 60 102 -3 13 20 36 30 30 15 -9 10 -44 -6 -50 -11 -4 -15 -21 -15 -55 0 -46 2 -49 25 -49 l25 0 0 105 c0 104 0 105 -24 105 -19 0 -31 -13 -59 -61 l-34 -62 -37 62 c-29 48 -43 61 -62 61 -24 0 -24 -1 -24 -105   </button>

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
