import React, {useState, useContext} from "react";
import {Context} from "./Context";
import Navigation from "./Navigation";
import Content from "./Content";

function Main() {
  const {journal, theme} = useContext(Context);
  const [isNavOpen, setIsNavOpen] = useState("");
  const [displayedEntry, setDisplayedEntry] = useState("");
  const [isNewEntryOpen, setIsNewEntryOpen] = useState(false);

  function openNav() {
    setIsNavOpen("open");
  }

  function closeNav() {
    setIsNavOpen("");
  }


  //Changes displayed entry when a nav link is clicked
  function displayEntry(entryDate) {
    setDisplayedEntry(
      journal.filter(item => {
        return item.date === entryDate;
      })[0]
    )
    setIsNewEntryOpen(false);
  }
  
  //Opens New Entry box when "New Entry" button is clicked
  function startNewEntry() {
    setIsNewEntryOpen(true);
  }

  return (
    <div className={"main-container " + theme}>
      <button className="open-nav-button"
              onClick={openNav}
      >&#9776;</button>
      <Navigation isNavOpen={isNavOpen}
                  closeNav={closeNav}
                  displayEntry={displayEntry}
      />
      <Content displayedEntry={displayedEntry}
               isNewEntryOpen={isNewEntryOpen}
               startNewEntry={startNewEntry}
      />
    </div>
  )
}

export default Main;