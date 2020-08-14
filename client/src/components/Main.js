import React, {useState, useContext} from "react";
import {Context} from "./Context";
import Navigation from "./Navigation";
import Content from "./Content";

function Main() {
  const {journal} = useContext(Context);
  const [displayedEntry, setDisplayedEntry] = useState("");
  const [isNewEntryOpen, setIsNewEntryOpen] = useState(false);

  //Changes displayed entry when a nav link is clicked
  function displayEntry(entryDate) {
    setDisplayedEntry(
      journal.filter(item => {
        return item.date === entryDate;
      })[0].entry
    )
    setIsNewEntryOpen(false);
  }
  
  //Opens New Entry box when "New Entry" button is clicked
  function startNewEntry() {
    setIsNewEntryOpen(true);
  }

  return (
    <div className="main-container">
      <Navigation displayEntry={displayEntry}/>
      <Content displayedEntry={displayedEntry}
               isNewEntryOpen={isNewEntryOpen}
               startNewEntry={startNewEntry}
      />
    </div>
  )
}

export default Main;