// ChatHistory.js
import React from 'react';
import '../css/chatHistory.css'; // Import CSS for ChatHistory component

const ChatHistory = ({ savedChats, onCreateNewChat }) => {
  return (
    <div className="chat-history">
      <h2>Chat History</h2>
      <div className="saved-chats">
        {savedChats.map((chat, index) => (
          <div key={index} className="chat-item">
            <p>{chat}</p>
          </div>
        ))}
      </div>
      <button onClick={onCreateNewChat}>New Chat</button>
    </div>
  );
};

export default ChatHistory;
