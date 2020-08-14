import React from "react";
import Button from "./Button";
import NewEntry from "./NewEntry";
import "../styles/styles.scss";

function Content(props) {
  return (
    <div className="content-container">
      <h1>Content</h1>
      <Button text="New Entry" 
              onClick={props.startNewEntry}
      />
      {props.isNewEntryOpen ?
        <NewEntry /> :
        <p className="displayed-entry">{props.displayedEntry}</p>
      }
    </div>
  )
}

export default Content;