import React from "react";
import Entry from "./Entry";
import emojipedia from "./../emojipedia";

function createEntry(emojiEntryData) {
  return (
    <Entry
      id={emojiEntryData.id}
      emoji={emojiEntryData.emoji}
      name={emojiEntryData.name}
      meaning={emojiEntryData.meaning}
    ></Entry>
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
