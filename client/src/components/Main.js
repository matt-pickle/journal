import React, {useState, useContext} from "react";
import {Context} from "./Context";
import Navigation from "./Navigation";
import Content from "./Content";

function Main() {
  const {user, journal} = useContext(Context);
  const [displayedEntry, setDisplayedEntry] = useState("");

  //Changes displayed entry when a nav link is clicked
  function displayEntry(entryDate) {
    setDisplayedEntry(
      journal.filter(item => {
        return item.date === entryDate;
      })[0].entry
    )
  }

  return (
    <div className="main-container">
      <Navigation displayEntry={displayEntry}/>
      <Content displayedEntry={displayedEntry}/>
    </div>
  )
}

export default Main;