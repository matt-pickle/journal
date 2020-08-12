import React, {useState, useContext, useEffect} from "react";
import {Context} from "./Context";
import Button from "./Button";

function NewEntry(props) {
  const {user, journal} = useContext(Context);
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const year = today.getFullYear();
    setDate(`${month}-${date}-${year}`);
  }, []);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function addEntry() {
    console.log(journal);
    const newEntry = {date: date, entry: input};
    const updatedJournal = [...journal, newEntry];
    console.log(newEntry);
    console.log(updatedJournal);

    fetch(`/journal/updateJournal?user=${user}&journal=${JSON.stringify(updatedJournal)}`, {
      method: "PUT"
    })
    .then(res => {
      if (!res.ok) {
        res.text().then(text => {
          console.error(text);
        });
      } else {
        res.text().then(text => {
          window.location.reload(false);
          setInput("");
        });
      }
    });
  }

  return (
    <div className="new-entry-container">
      <h1>New Entry, {date}</h1>
      <textarea value={input}
                onChange={handleChange}
      />
      <Button text="SUBMIT"
              onClick={addEntry}
      />
    </div>
  )
}

export default NewEntry;