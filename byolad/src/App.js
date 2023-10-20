import byo_LAD from "./circle_byo_LAD.png";
import "./App.css";
import { useState } from "react";
import React from "react";
import { IconCommentLine } from "@instructure/ui-icons";

class MyIcon extends React.Component {
  render() {
    return <IconCommentLine color="primary-inverse" title="Send" />;
  }
}

function App() {
  const [userPrompt, setUserPrompt] = useState("");
  const [history, setHistory] = useState([]);
  const [messageNumber, setMessageNumber] = useState(0);

  const change = (event) => {
    const newval = event.target.value;
    setUserPrompt(newval);
  };

  function newMessage(e) {
    e.preventDefault();
    const nextHistory = [...history.slice(0, messageNumber), userPrompt];
    setHistory(nextHistory);
    setMessageNumber(nextHistory.length);
    setUserPrompt("");
  }

  const messages = history.map((message, position) => {
    return <p key={message}>{message}</p>;
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={byo_LAD} className="App-logo" alt="logo" />
      </header>
      <div>
        <div className="App-body">
          <p>
            Here you can chat with the AI about your code. You can ask whatever
            you want, but the best is to ask question about your code or
            generating new code. The best is to ask the AI to explain, review,
            or generate code.
          </p>
          <p className="App-link">Explain selected code</p>
          <p className="App-link">Review selected code</p>
          {messages}
        </div>
      </div>

      <footer className="App-footer">
        <div className="chat-box">
          <form className="chat-bar" name="chatbox">
            <input onChange={change} value={userPrompt} type="text" placeholder="Ask a question to the AI"/>
            <button type="submit" onClick={(e) => {newMessage(e)}}><MyIcon/></button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App;
