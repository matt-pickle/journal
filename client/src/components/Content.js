import React from "react";
import Button from "./Button";
import NewEntry from "./NewEntry";
import "../styles/styles.scss";

function Content(props) {
  return (
    <div className="content-container">
      <Button text="NEW ENTRY" 
              onClick={props.startNewEntry}
      />
      {props.isNewEntryOpen ?
        <NewEntry /> :
        <div>
          <h1 className="entry-header">{props.displayedEntry.date}</h1>
          <p className="displayed-entry">{props.displayedEntry.entry}</p>
        </div>
      }
    </div>
  )
}

export default Content;