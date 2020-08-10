import React, {useEffect} from "react";

function Content(props) {

  return (
    <div className="content-container">
      <h1>Content</h1>
      <p>{props.displayedEntry}</p>
    </div>
  )
}

export default Content;