// import React, { useState } from 'react';
import React from 'react';
import './css/styles.css'; 
import ChatInterface from './components/ChatInterface';
// import ChatHistory from './components/ChatHistory'; 

function App() {
  // const [messages, setMessages] = useState([]);
  // const [savedChats, setSavedChats] = useState([]);

  // const handleCreateNewChat = () => {
  //   // Logic to create a new chat
  //   setMessages([]);
  //   // You can add additional logic here to handle saving the current chat to saved chats if needed
  // };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat with AI</h1>
      </header>
      <main>
        {/* <ChatHistory savedChats={savedChats} onCreateNewChat={handleCreateNewChat} /> */}
        <ChatInterface />
      </main>
    </div>
  );
}

export default App;
