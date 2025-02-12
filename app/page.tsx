'use client'
import Image from "next/image";
import LandingPage from "./_components/LandingPage";
import About from "./_components/About";
import About1 from "./_components/About1";
import ParallaxTextReveal from "./_components/ParallaxTextReveal";
import Smooth from "./_components/ScrollSmoother";
import { useState } from "react";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const apiKey = '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';

  const sendMessage = async () => {
    if (userInput.trim() === '') return;

    const updatedMessages: Message[] = [...messages, { role: 'user', content: userInput }];
    setMessages(updatedMessages);
    setUserInput("");

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: updatedMessages,
        }),
      });

      const data = await response.json();
      const assistantMessage = data.choices[0].message.content;

      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Smooth>
      <LandingPage />
      {/* <About /> */}
      <About1 />
      <ParallaxTextReveal />

      <div>
        <button
          className="fixed bottom-4 right-4 bg-transparent p-3 rounded-full shadow-lg hover:opacity-80 transition duration-300 z-50"
          onClick={() => setIsChatOpen(!isChatOpen)}
          style={{ position: 'fixed', bottom: '20px', right: '20px' }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/GPT-4.png"
            alt="Chatbot Icon"
            width={50}
            height={50}
            className="rounded-full w-14 h-14 object-cover"
          />
        </button>

        {isChatOpen && (
          <div className="fixed bottom-20 right-4 w-80 bg-white border rounded-2xl shadow-lg p-4 z-50" style={{ color: 'black' }}>
            <h2 className="text-lg font-bold mb-2">ChatGPT Chatbot</h2>
            <div className="h-64 overflow-y-auto border rounded-lg p-2 mb-2" style={{ color: 'black' }}>
              {messages.map((msg, index) => (
                <div key={index} className={msg.role === 'user' ? 'text-black text-right' : 'text-black text-left'}>
                  {msg.content}
                </div>
              ))}
            </div>
            <div className="flex">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                className="border rounded-l-lg flex-1 p-2"
                placeholder="Type your message..."
                style={{ color: 'black' }}
              />
              <button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded-r-lg">Send</button>
            </div>
          </div>
        )}
      </div>
    </Smooth>
  );
}


