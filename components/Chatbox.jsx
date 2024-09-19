// components/Chatbox.js
import { useState } from 'react';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [phonenumber,setPhonenumber]=useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, newMessage]);
    setInput('');

    // Simulate a bot response (you can replace this with actual API calls)
    setTimeout(() => {
      const botReply = { text: `You have said: ${input}`, sender: 'bot' };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  return (
    <div>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here................"
          required
        />
        <button type="submit">Send</button>
      </form>
      <style jsx>{`
        .chat-window {
          max-height: 400px;
          overflow-y: auto;
          border: 1px solid #ccc;
          padding: 10px;
          margin-bottom: 10px;
          
        }
        .user {
          text-align: right;
          color: blue;
        }
        .bot {
          text-align: left;
          color: green;
        }
        form {
          display: flex bg-green;
        }
        input {
          flex: 1;
          padding: 10px;
        }
        button {
          padding: 10px;
        }
      `}</style>
    </div>
  );
};

export default Chatbox;
