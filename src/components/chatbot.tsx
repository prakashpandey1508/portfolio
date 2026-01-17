import React, { useState, useRef, useEffect } from 'react';
import { MdOutlineChat } from 'react-icons/md';
import { FaWindowClose } from "react-icons/fa";
import axios from 'axios';

// Type definitions for props and chat messages
interface ChatbotProps {
  toggleChat: () => void;
}

interface ChatMessage {
  role: 'user' | 'model';
  parts: string[];
}

interface Conversation {
  id: string;
  context: Record<string, unknown>;
  [key: string]: unknown; // Add additional properties as needed
}


interface ApiResponse {
  data: {
    text: string;
    conversation: Conversation | null;
  };
  status: number;
}

const Chatbot: React.FC<ChatbotProps> = ({ toggleChat }) => {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [messageInput, setMessageInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [conversationObject, setConversationObject] = useState<Conversation | null>(null);

  const chatRef = useRef<HTMLDivElement | null>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageInput(e.target.value);
  };

  const handleChatInput = async () => {
    const message = messageInput;
    if (messageInput === '') return;

    try {
      setLoading(true);
      const apiResponse: ApiResponse = await axios.post('/api/message', {
        message,
        conversation: conversationObject,
      });

      const apiData = apiResponse?.data;
      if (apiResponse.status === 403) {
        updateChatHistory(apiData?.text);
        return;
      }

      updateChatHistory(apiResponse?.data?.text);
      setMessageInput('');
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateChatHistory = (message: string) => {
    const newHistory: ChatMessage[] = [
      ...chatHistory,
      { role: 'user', parts: [messageInput] },
      { role: 'model', parts: [message] },
    ];
    setChatHistory(newHistory);
  };

  const initializeChatbot = async () => {
    try {
      setLoading(true);
      const apiResponse: ApiResponse = await axios.post('/api/message', {
        message: '',
        conversation: null,
      });

      setChatHistory([
        {
          role: 'model',
          parts: ['Hi, I am Tim, the Prakash Assistant. How can I help you?'],
        },
      ]);

      const initData = apiResponse.data;
      setConversationObject(initData.conversation);
    } catch (error) {
      console.error('Error initializing chatbot:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initializeChatbot();
  }, []);

  return (
    <div className="fixed bottom-0 right-0 z-20">
      <div
        className="fixed inset-0 bg-gray-900 bg-opacity-75 z-5"
        onClick={() => {
          toggleChat();
        }}
      />
      <div
        ref={chatRef}
        className="fixed bottom-10 right-10 backdrop-blur duration-200 border-b bg-zinc-900/500 border border-zinc-600 p-4 rounded-lg shadow-md z-70 font-Mono"
      >
        <button
          onClick={() => {
            toggleChat();
          }}
          className="absolute -top-5 -right-5 z-10 text-red-500 p-2 font-mono"
        >
          <FaWindowClose size={28} />
        </button>
        <div className="flex flex-col gap-2 w-[23rem] h-96 overflow-y-auto snap-y">
          {chatHistory.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`text-xl ${
                message.role === 'user'
                  ? 'text-fuchsia-500'
                  : 'text-cyan-300'
              } snap-end`}
            >
              {`${message.role === 'user' ? 'You' : 'Tim'} : ${message.parts}`}
            </div>
          ))}
          {loading && <div className="text-center">Loading...</div>}
        </div>
        <div className="flex items-center justify-between">
          <input
            disabled={loading}
            className="w-full border border-gray-300 px-3 py-2 text-gray-700 rounded-md mt-4 focus:outline-none"
            placeholder="Type your message"
            onKeyDown={(e) =>
              e.key === 'Enter' ? handleChatInput() : null
            }
            onChange={handleInput}
            value={messageInput}
          />
          <button
            className={`bg-[rgba(29,71,253,1)] px-4 py-2 text-white rounded-md shadow-md hover:bg-[#1d46fdd5] disabled:bg-slate-500 focus:outline-none ml-4`}
            disabled={messageInput === '' || loading}
            onClick={() => handleChatInput()}
          >
            <MdOutlineChat size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
