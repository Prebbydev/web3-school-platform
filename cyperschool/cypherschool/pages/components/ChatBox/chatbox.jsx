import React, { useState } from 'react';


const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [otherUserName, /*setOtherUserName*/] = useState();

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        sender: 'You',
        message: inputMessage,
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setInputMessage('');
    }
  };

  return (
    <div className="chat-box">
      <div className="chat-header">
        Chatbox {otherUserName}
      </div>
      <div className="message-box">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <div className="sender">{msg.sender}</div>
            <div className="content" >{msg.message}</div>
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
