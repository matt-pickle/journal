import React from "react";
import NewEntry from "./NewEntry";
import "../styles/styles.scss";

function Content(props) {

  return (
    <div className="content-container">
      <h1>Content</h1>
      <NewEntry />
      <p className="displayed-entry">{props.displayedEntry}</p>
    </div>
  )
}

export default Content;