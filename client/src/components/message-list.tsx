import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const MessageDisplay = () => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const socket = io("http://localhost:8000");

    // Event listener for 'messageSent' event
    socket.on("message", (message: string) => {
      console.log(message)
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

  // return <p>asd</p>
  return (
    <div>
      <h1>Messages</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default MessageDisplay;
