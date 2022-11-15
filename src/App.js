import logo from './logo.svg';
import './App.css';
import{ useState, useEffect } from "react";

function App() {

  const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
    
      fetch("http://localhost:3732/api/greeting", {"method": "GET"}).then((res) => {

        setMessage(res.message)

        
      })
  }
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
          {/* <input type="text" className="Hello" /> <p/> */}
          <input type="submit" className="subbtt" />
        </form>
      </header>
    </div>
  );
}

export default App;
