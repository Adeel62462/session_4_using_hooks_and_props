import React, {useState} from 'react';
import './App.css';
import Message from './Message.js';


function App() {
  let [counter,setCounter] = useState(0);
  let [isMorning,setMorningStatus] = useState(true);

  return (
    <div className={`App-Background ${isMorning? "App-Day" : "App-Night"}`} >
      <h1>
        Good {isMorning ? "Morning" : "Night"}
      </h1>
      <Message number={counter}/>
      <br />
      <button className="App-Button" onClick={()=>setCounter(++counter)}> Click this button to increment the counter</button>
      <br /> 
      <br />
      <button className="App-Button" onClick={()=>setMorningStatus(!isMorning)}> Update Day</button>
    </div>
  );
}

export default App;
