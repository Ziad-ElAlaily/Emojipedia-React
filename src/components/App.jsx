import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

//Create Entry Component -done

// Create props to replace hard coded data -done
//import emojipedia const -done
// Map through emojipedia array and render entry components -done

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
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
