import Image from "next/image";
import LandingPage from "./_components/LandingPage";
import About from "./_components/About";
import About1 from "./_components/About1";
import ParallaxTextReveal from "./_components/ParallaxTextReveal";
import Smooth from "./_components/ScrollSmoother";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const apiKey = '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';

  const sendMessage = async () => {
    if (userInput.trim() === '') return;

    const updatedMessages = [...messages, { role: 'user', content: userInput }];
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

      <div className="p-4 border rounded shadow-md max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-2">ChatGPT Chatbot</h2>
        <div className="h-64 overflow-y-scroll border p-2 mb-2">
          {messages.map((msg, index) => (
            <div key={index} className={msg.role === 'user' ? 'text-blue-600 text-right' : 'text-green-600 text-left'}>
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
            className="border flex-1 p-2"
            placeholder="Type your message here..."
          />
          <button onClick={sendMessage} className="bg-blue-500 text-white p-2 ml-2 rounded">Send</button>
        </div>
      </div>
    </Smooth>
  );
}
