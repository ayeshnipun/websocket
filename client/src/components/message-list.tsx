import React, { useEffect, useState } from "react";
import io from "socket.io-client";

interface Message {
  messageId: string;
  sender: string;
  reciever: string;
  content: string;
}

const MessageDisplay = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const socket = io("http://localhost:8000");

    // Event listener for 'messageSent' event
    socket.on("message", (message: Message) => {
      console.log(message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Log a message when connected to the server
    socket.on("connect", () => {
      console.log("Connected to WebSocket server");
    });

    return () => {
      socket.disconnect();
    };
  }, []); // Only run once on component mount

  return (
    <div>
      <h1>Messages</h1>
      <ul>
        {messages.map((message, index) => (
          <>
            <div key={index}>
              {message.sender}: {message.content}
            </div>
          </>
        ))}
      </ul>
    </div>
  );
};

export default MessageDisplay;
