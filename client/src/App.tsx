import "./App.css";
import MessageDisplay from "./components/message-list";

function App() {
  return (
    <div className="App">
      <h1>WebSocket Message Display</h1>
      <main>
        <MessageDisplay />
      </main>
    </div>
  );
}

export default App;
