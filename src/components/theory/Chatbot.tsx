import { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, X, Bot, User } from 'lucide-react';
import { ChatMessage, findBestResponse } from '../../data/chatbot';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hello! I'm your research assistant. I can help you understand our research about Gen Z, buzzers, and social media in Indonesian politics. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Get response from the enhanced chatbot system
      const botResponse = await findBestResponse(userMessage.content);
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error getting bot response:', error);
      // Fallback response
      const fallbackMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: "I'm sorry, I'm having trouble processing your request right now. Please try asking about our research topics like buzzers, Gen Z, social media algorithms, or FOMO.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, fallbackMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-accent-teal text-primary-dark' 
            : 'bg-accent-teal text-primary-dark hover:bg-accent-blue'
        }`}
        aria-label="Toggle chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-96 h-[500px] bg-primary-light rounded-card shadow-lg border border-primary-dark flex flex-col light:bg-white light:border-neutral-300">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-primary-dark bg-primary-dark/10 rounded-t-card light:border-neutral-300 light:bg-neutral-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent-teal rounded-full flex items-center justify-center">
                <Bot size={16} className="text-primary-dark" />
              </div>
              <div>
                <h3 className="text-text-primary font-semibold light:text-neutral-900">Research Assistant</h3>
                <p className="text-text-secondary text-sm light:text-neutral-700">Ask me about our research!</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-card ${
                    message.type === 'user'
                      ? 'bg-accent-teal text-primary-dark'
                      : 'bg-primary-dark text-text-primary light:bg-neutral-100 light:text-neutral-900'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {message.type === 'bot' && (
                      <Bot size={16} className="text-accent-teal mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <p className="text-xs opacity-60 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                    {message.type === 'user' && (
                      <User size={16} className="text-primary-dark mt-0.5 flex-shrink-0" />
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-primary-dark text-text-primary p-3 rounded-card light:bg-neutral-100 light:text-neutral-900">
                  <div className="flex items-center gap-2">
                    <Bot size={16} className="text-accent-teal" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-accent-teal rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-accent-teal rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-accent-teal rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-primary-dark">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about our research..."
                className="flex-1 px-3 py-2 bg-primary-dark text-text-primary rounded-button border border-primary-light focus:outline-none focus:border-accent-teal transition-colors text-sm"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="px-3 py-2 bg-accent-teal text-primary-dark rounded-button hover:bg-accent-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-xs text-text-secondary mt-2 text-center">
              Try asking about: buzzers, Gen Z, algorithms, FOMO, or research objectives
            </p>
          </div>
        </div>
      )}
    </>
  );
} 