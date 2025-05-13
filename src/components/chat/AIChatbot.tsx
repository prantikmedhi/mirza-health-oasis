
import { useState, useEffect, useRef } from 'react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{sender: string, text: string}[]>([
    { sender: 'bot', text: 'Hello! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Thank you for your question. We're here to help with your medical needs.",
        "Our doctors are available for appointments Monday through Saturday.",
        "For emergency services, please call +91 8011673568 or visit our emergency department.",
        "The hospital is located at Tech City, Mirza, Near IITG, Bongora, Guwahati, Assam-781015.",
        "You can book an appointment online through our appointment page.",
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { sender: 'bot', text: randomResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Chatbot toggle button */}
      <button 
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gold text-royal shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 animate-float ${isOpen ? 'animate-glow' : 'hover:animate-glow'}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat with our AI Assistant"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
        )}
      </button>
      
      {/* Tooltip for chatbot */}
      {!isOpen && (
        <div className="fixed bottom-[88px] right-6 bg-white text-royal px-4 py-2 rounded shadow-lg z-50 animate-fade-in">
          <div className="absolute -bottom-2 right-6 w-3 h-3 bg-white transform rotate-45"></div>
          <p className="text-sm font-medium">Ask our AI Assistant</p>
        </div>
      )}
      
      {/* Chatbot modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 h-96 bg-white rounded-lg shadow-xl z-50 flex flex-col animate-scale-in overflow-hidden">
          {/* Chat header */}
          <div className="bg-royal text-white p-4">
            <h3 className="font-playfair font-medium">Mirza Hospital AI Assistant</h3>
            <p className="text-xs opacity-75">Ask me anything about our hospital</p>
          </div>
          
          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.sender === 'user' 
                      ? 'bg-royal text-white rounded-tr-none' 
                      : 'bg-gray-100 text-gray-800 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg rounded-tl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-royal animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-royal animate-pulse delay-100"></div>
                    <div className="w-2 h-2 rounded-full bg-royal animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef}></div>
          </div>
          
          {/* Chat input */}
          <form onSubmit={handleSendMessage} className="p-3 bg-gray-50 border-t border-gray-200">
            <div className="flex space-x-2">
              <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-royal"
                placeholder="Type your message..."
              />
              <button 
                type="submit"
                className="bg-royal text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-royal-light transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
