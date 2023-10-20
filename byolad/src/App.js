import byo_LAD from './circle_byo_LAD.png';
import icon from './send.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={byo_LAD} className="App-logo" alt="logo" />
      </header>
      <body>
        <div className="App-body">
        <p>
          Here you can chat with the AI about your code. You can ask whatever you want, but the best is to ask question about your code or generating new code. The best is to ask the AI to explain, review, or generate code.
        </p>
        <p className="App-link">
          Explain selected code
        </p>
        <p className="App-link">
          Review selected code
        </p>
        </div>
      </body>
        
      <footer className="App-footer">
        <div className="chat-box">
          <form className="chat-bar">
            <input type="text" placeholder="Ask a question to the AI"/>
            <button type="submit"><img src={icon} alt="send"/></button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App;
