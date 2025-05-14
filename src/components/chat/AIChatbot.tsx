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
    className="w-14 h-14"
  >
    <g transform="translate(0.000000, 300.000000) scale(0.100000, -0.100000)" fill="#000000" stroke="none">
      <path d="M1320 2940 c-625 -87 -1108 -535 -1242 -1153 -19 -85 -22 -133 -22 -292 0 -173 3 -201 28 -310 33 -140 60 -217 121 -336 200 -398 570 -681 1015 -776 122 -26 440 -26 560 1 446 97 817 382 1015 781 63 128 95 220 126 365 29 137 32 397 6 538 -109 579 -558 1039 -1135 1162 -111 24 -366 35 -472 20z m377 -46 c467 -69 856 -350 1068 -774 48 -95 94 -232 121 -360 28 -128 26 -400 -4 -537 -123 -569 -553 -996 -1119 -1110 -126 -25 -415 -25 -533 1 -291 63 -521 187 -725 391 -202 201 -326 428 -387 708 -29 136 -32 417 -5 547 83 392 301 717 622 922 288 186 632 261 962 212z"/> <path d="M1266 2784 c-252 -45 -483 -165 -675 -349 -204 -197 -338 -446 -386 -719 -19 -114 -19 -324 0 -446 67 -413 344 -779 730 -965 169 -81 312 -115 515 -122 172 -6 298 10 446 58 441 141 766 490 881 946 25 98 28 125 28 293 0 249 -32 395 -130 591 -186 375 -542 643 -949 714 -111 19 -351 19 -460 -1z m532 -48 c430 -108 764 -412 911 -828 49 -142 65 -243 65 -423 1 -177 -13 -265 -66 -415 -151 -427 -522 -749 -965 -837 -124 -24 -377 -24 -493 1 -403 87 -722 335 -901 701 -98 200 -137 395 -126 624 8 150 32 265 85 398 150 384 475 672 872 773 132 34 186 39 355 35 130 -3 179 -8 263 -29z"/> <path d="M1195 2261 c-57 -14 -104 -43 -151 -93 l-46 -50 4 -76 c6 -92 38 -173 80 -203 16 -12 31 -19 34 -17 2 3 -1 29 -7 57 -29 136 63 261 191 261 53 0 121 -31 155 -72 l25 -30 27 33 c52 61 153 86 226 55 46 -19 89 -68 110 -124 l17 -47 -6 55 c-12 117 -74 202 -174 235 -64 21 -111 11 -164 -36 l-35 -30 -45 35 c-63 48 -159 67 -241 47z m214 -69 c29 -17 61 -32 71 -32 11 0 41 14 67 31 42 27 54 30 97 25 50 -5 96 -28 96 -47 0 -6 -9 -7 -22 -3 -57 18 -172 -9 -218 -51 -13 -12 -19 -12 -40 0 -108 63 -184 74 -256 37 -70 -36 -134 -128 -134 -191 0 -16 -5 -33 -10 -36 -25 -16 -43 122 -22 175 18 46 76 96 137 118 17 6 64 10 106 9 66 -2 82 -6 128 -35z"/> <path d="M1745 2237 c44 -18 89 -38 100 -44 38 -21 84 -78 111 -137 94 -207 -25 -490 -278 -658 -125 -83 -117 -86 -117 46 1 235 -58 389 -213 552 -47 49 -33 64 27 31 35 -20 69 -57 173 -186 92 -114 228 -124 296 -21 30 46 48 125 38 170 -8 34 -8 33 -15 -24 -14 -113 -63 -183 -135 -193 -73 -10 -120 27 -255 197 -56 71 -106 100 -174 100 -85 0 -91 -8 -35 -46 118 -79 228 -254 257 -407 16 -85 19 -213 6 -290 -9 -57 -13 -57 103 13 171 103 276 215 339 360 30 71 32 82 32 195 0 111 -2 125 -28 181 -51 109 -146 179 -260 190 l-52 5 80 -34z"/> <path d="M970 2054 c-6 -14 -15 -56 -21 -94 -20 -116 16 -245 101 -374 77 -114 179 -197 373 -304 l57 -32 0 26 c0 41 -17 62 -78 93 -123 62 -189 127 -218 212 -13 37 -13 44 2 66 15 23 20 25 63 18 67 -10 101 -9 113 3 28 28 -108 113 -202 128 -60 9 -94 27 -123 66 -33 44 -50 101 -50 165 0 29 -2 53 -4 53 -2 0 -8 -12 -13 -26z m80 -242 c23 -19 91 -49 130 -57 39 -8 86 -30 95 -44 3 -6 -11 -9 -34 -8 -30 1 -47 -5 -65 -22 -35 -33 -39 -63 -18 -125 l18 -54 -23 15 c-62 41 -158 221 -169 319 l-7 59 29 -35 c16 -19 36 -41 44 -48z"/> <path d="M1638 1992 c-88 -79 23 -214 116 -141 37 29 47 59 35 103 -18 66 -96 86 -151 38z m105 -14 c9 -7 19 -25 22 -40 8 -33 -31 -78 -69 -78 -25 0 -66 41 -66 65 0 7 9 24 21 39 22 28 64 35 92 14z"/> <path d="M1244 1581 c12 -19 77 -56 139 -79 57 -22 57 -22 57 -2 0 22 -26 36 -120 65 -30 9 -61 19 -69 22 -9 4 -11 1 -7 -6z"/> <path d="M1220 1551 c0 -43 251 -204 258 -166 6 28 -34 60 -104 85 -37 13 -86 38 -110 56 -24 19 -44 30 -44 25z"/> <path d="M1000 1075 l0 -105 31 0 c30 0 31 2 25 31 -3 17 -6 43 -6 58 0 20 -2 23 -10 11 -7 -11 -10 -5 -10 23 0 20 4 37 10 37 12 0 29 -31 24 -45 -6 -16 40 -89 57 -93 14 -3 65 83 60 102 -3 13 20 36 30 30 15 -9 10 -44 -6 -50 -11 -4 -15 -21 -15 -55 0 -46 2 -49 25 -49 l25 0 0 105 c0 104 0 105 -24 105 -19 0 -31 -13 -59 -61 l-34 -62 -37 62 c-29 48 -43 61 -62 61 -24 0 -24 -1 -24 -105z"/> <path d="M1280 1075 l0 -105 30 0 30 0 0 105 0 105 -30 0 -30 0 0 -105z"/> <path d="M1380 1076 l0 -106 31 0 c30 0 31 2 26 30 -5 25 -3 30 13 30 10 0 27 -13 37 -30 13 -22 25 -30 45 -30 33 0 34 4 9 39 -20 27 -20 28 0 44 24 21 25 68 1 97 -15 18 -31 23 -90 28 l-72 5 0 -107z m124 38 c8 -22 -11 -44 -39 -44 -18 0 -24 7 -27 30 -4 28 -2 30 28 30 20 0 34 -6 38 -16z"/> <path d="M1590 1155 c0 -23 3 -25 49 -25 30 0 51 5 54 13 2 6 8 9 12 5 5 -4 -4 -17 -19 -29 -37 -29 -106 -117 -106 -135 0 -11 24 -14 124 -14 116 0 125 1 131 20 5 16 15 20 52 20 36 0 46 -4 50 -20 4 -14 14 -20 34 -20 16 0 29 3 29 7 0 4 -19 51 -42 106 -41 94 -44 98 -72 95 -27 -3 -33 -11 -73 -103 -23 -56 -43 -90 -43 -77 0 23 -3 24 -55 20 -30 -1 -55 -1 -55 1 0 2 23 29 50 61 28 32 50 67 50 79 0 20 -5 21 -85 21 -84 0 -85 0 -85 -25z m315 -77 c6 -25 5 -28 -19 -28 -30 0 -29 -2 -15 39 12 35 24 31 34 -11z"/> <path d="M740 890 c-7 -34 -7 -60 1 -60 5 0 9 4 9 8 0 5 7 9 15 9 8 0 15 -4 15 -9 0 -4 5 -8 10 -8 6 0 10 14 10 30 0 32 -14 40 -24 13 -6 -14 -8 -14 -21 3 -8 10 -15 17 -15 14z"/> <path d="M872 863 c4 -41 42 -39 46 2 4 33 -12 25 -21 -10 -4 -15 -5 -13 -6 8 0 15 -6 27 -12 27 -6 0 -9 -12 -7 -27z"/> <path d="M990 860 c0 -25 4 -30 23 -29 12 0 16 3 10 6 -7 2 -13 16 -13 29 0 13 -4 24 -10 24 -5 0 -10 -13 -10 -30z"/> <path d="M1098 878 c7 -7 12 -20 12 -30 0 -10 5 -18 10 -18 6 0 10 9 10 20 0 11 5 20 10 20 6 0 10 5 10 10 0 6 -14 10 -32 10 -25 0 -29 -3 -20 -12z"/> <path d="M1217 883 c-11 -10 -8 -53 3 -53 6 0 10 14 10 30 0 31 -2 35 -13 23z"/> <path d="M1309 888 c-1 -2 -3 -15 -5 -30 -2 -22 1 -28 16 -28 26 0 34 17 13 29 -17 10 -17 10 0 11 10 0 15 5 12 10 -5 9 -33 14 -36 8z"/> <path d="M1420 861 c0 -29 2 -30 20 -19 24 15 22 41 -3 46 -13 3 -17 -3 -17 -27z"/> <path d="M1530 860 c0 -24 4 -30 23 -30 18 0 19 2 7 10 -13 9 -13 10 0 10 13 0 13 1 0 10 -10 6 -11 10 -2 10 6 0 12 5 12 10 0 6 -9 10 -20 10 -16 0 -20 -7 -20 -30z"/> <path d="M1644 876 c-3 -9 -4 -23 0 -31 6 -17 42 -20 52 -4 4 8 0 9 -15 4 -16 -5 -21 -2 -21 10 0 12 6 15 21 10 15 -5 20 -3 17 6 -7 20 -47 23 -54 5z"/> <path d="M1770 861 c0 -17 5 -31 10 -31 6 0 10 11 10 24 0 14 -4 28 -10 31 -6 4 -10 -7 -10 -24z"/> <path d="M1862 862 c-9 -27 -8 -29 19 -29 33 0 32 -1 17 32 -15 32 -24 32 -36 -3z"/> <path d="M1980 890 c-1 -3 -3 -17 -4 -32 -1 -24 2 -28 23 -28 22 0 23 2 9 13 -9 6 -18 21 -21 32 -3 11 -6 18 -7 15z"/> <path d="M2087 883 c-11 -10 -8 -53 3 -53 6 0 10 14 10 30 0 31 -2 35 -13 23z"/> <path d="M2170 880 c0 -5 4 -10 9 -10 5 0 12 -10 14 -22 l4 -23 2 23 c0 12 6 22 11 22 6 0 10 5 10 10 0 6 -11 10 -25 10 -14 0 -25 -4 -25 -10z"/> <path d="M2293 860 c6 -16 14 -30 17 -30 3 0 11 14 17 30 6 17 7 30 2 30 -5 0 -9 -5 -9 -12 0 -9 -3 -9 -12 0 -21 21 -27 13 -15 -18z"/> <path d="M1120 790 c-8 -17 -7 -61 1 -65 5 -4 9 1 9 9 0 9 5 16 10 16 6 0 10 -7 10 -16 0 -8 5 -12 10 -9 6 3 10 17 10 30 0 13 -4 27 -10 30 -5 3 -10 -1 -10 -9 0 -22 -17 -20 -23 2 -3 9 -6 15 -7 12z"/> <path d="M1246 775 c-17 -17 -12 -40 9 -49 15 -5 45 18 45 34 0 5 -9 14 -19 20 -15 7 -23 6 -35 -5z"/> <path d="M1372 781 c-6 -3 -10 -15 -9 -26 3 -26 26 -41 40 -25 9 9 8 15 -6 25 -18 13 -18 13 0 17 15 3 16 4 2 10 -9 3 -21 3 -27 -1z"/> <path d="M1597 783 c-11 -10 -8 -63 3 -63 6 0 10 16 10 35 0 36 -2 40 -13 28z"/> <path d="M1695 779 c-11 -4 -14 -8 -6 -8 8 -1 11 -8 8 -21 -3 -11 -1 -23 4 -26 5 -3 9 6 9 20 0 13 5 26 12 28 7 3 8 7 3 10 -6 3 -19 2 -30 -3z"/> <path d="M1806 762 c-20 -39 -21 -37 14 -37 25 0 29 3 24 20 -14 46 -21 49 -38 17z"/> <path d="M1921 758 c-1 -27 3 -38 13 -38 8 0 18 5 21 10 3 6 -1 10 -9 10 -8 0 -16 12 -19 28 -3 22 -4 20 -6 -10z"/> <path d="M1480 748 c0 -18 4 -28 8 -22 4 6 15 14 25 17 24 9 17 31 -11 35 -19 3 -22 -1 -22 -30z"/> </g> </svg> {/* Other path elements */}
  
</button>

      {/* Tooltip */}
      {!isOpen && (
        <div className="fixed bottom-24 right-6 bg-white text-teal px-4 py-2 rounded shadow z-50">
          <p className="text-sm">Ask MMH AI Assistant</p>
        </div>
      )}

      {/* Chatbox */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 h-[480px] bg-white rounded-xl shadow-xl flex flex-col overflow-hidden z-50">
          {/* Header */}
          <div className="bg-teal text-white p-4">
            <h3 className="font-semibold text-base text-white">Mirza Multispeciality Hospital AI Chatbot</h3>  
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
