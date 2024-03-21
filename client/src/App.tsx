import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MessageDisplay from "./components/message-list";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WebSocket Message Display</h1>
      </header>
      <main>
        <MessageDisplay />
      </main>
    </div>
  );
}

export default App;
