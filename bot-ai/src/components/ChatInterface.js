import React, { useState } from 'react';
import '../css/styles.css'; 
import Message from './Message';
import InputField from './InputField';
// import { fetchResponseByQuestionId } from '../apiService'; 
import mockData from "../data/mockData.json"

const ChatInterface = () => {
    const [messages, setMessages] = useState([]);
  
    const handleMessageSubmit = (message) => {
        // Append user message to messages state
        setMessages(prevMessages => [...prevMessages, { text: message, sender: 'user' }]);
        
        // Simulate AI response - Fetch response dynamically based on user input message
        const userMessage = message.toLowerCase(); // Convert user message to lowercase for case-insensitive comparison
        const matchedQuestion = mockData.find(item => userMessage.includes(item.question.toLowerCase()));
        
        if (matchedQuestion) {
          setMessages(prevMessages => [...prevMessages, { text: matchedQuestion.response, sender: 'ai' }]);
        } else {
          setMessages(prevMessages => [...prevMessages, { text: "I'm sorry, I couldn't find a response for that question.", sender: 'ai' }]);
        }
      };
      
      
  
    return (
      <div className="chat-interface">
        <div className="messages-container">
          {messages.map((message, index) => (
            <Message key={index} text={message.text} sender={message.sender} />
          ))}
        </div>
        <InputField onSubmit={handleMessageSubmit} />
      </div>
    );
  };

export default ChatInterface;
