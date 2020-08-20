import React, {useContext} from "react";
import {Context} from "./Context";
import Button from "./Button";
import NewEntry from "./NewEntry";
import "../styles/styles.scss";

function Content(props) {
  const {theme} = useContext(Context);

  return (
    <div className={"content-container " + theme}>
      <Button text="NEW ENTRY" 
              onClick={props.startNewEntry}
      />
      {props.isNewEntryOpen ?
        <NewEntry updateMain={props.updateMain} /> :
        <div>
          <h1 className="entry-header">{props.displayedEntry.date}</h1>
          <p className="displayed-entry">{props.displayedEntry.entry}</p>
        </div>
      }
    </div>
  )
}

export default Content;