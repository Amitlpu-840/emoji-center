import React from "react";
import Entry from "./component/entry";
import emojipedia from "./component/emojipedia";



function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(nEntry =>(
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
