import React from "react";
import Entry from "./component/entry";
import emojipedia from "./component/emojipedia";
import './App.css';


function App() {
  return (
    <div>
      <div className="creater">
        <h3 >By Amit Giri</h3>
      </div>
      <h1>
        <span>Emoji Center</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(nEntry => (
        <Entry
          key={nEntry.id}
          emoji={nEntry.emoji}
          name={nEntry.name}
          mean={nEntry.meaning}
        />
      ))
      }</dl>
    </div>
  );
}

export default App;
