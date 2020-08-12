import React from "react";
import NewEntry from "./NewEntry";

function Content(props) {

  return (
    <div className="content-container">
      <h1>Content</h1>
      <NewEntry />
      <p>{props.displayedEntry}</p>
    </div>
  )
}

export default Content;