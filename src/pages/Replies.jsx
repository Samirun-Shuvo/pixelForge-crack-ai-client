import React, { useState } from "react";

const Replies = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input) {
      setMessages([...messages, { sender: "user", text: input }]);
      const response = await fetch("http://localhost:5000/paintings/replies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      setMessages([
        ...messages,
        { sender: "user", text: input },
        { sender: "ai", text: data.reply },
      ]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-100">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 shadow-lg">
        What To Know ?
      </h1>
      <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-lg">
        <div className="space-y-4 mb-6 h-72 overflow-y-scroll p-4 bg-gray-50 rounded-md">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              } mb-2`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Replies;
