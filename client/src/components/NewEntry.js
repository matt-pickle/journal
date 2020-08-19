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
    const day = today.getDate();
    const year = today.getFullYear();
    setDate(`${month}-${day}-${year}`);
  }, []);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function addEntry() {
    //Checks for existing entry for today's date
    const existingEntry = journal.filter(entryObj => {
      return entryObj.date === date;
    });
    let newEntry;
    let updatedJournal;
    //Appends new entry to today's existing entry or adds new entry if one does not exist for today
    if (existingEntry.length > 0) {
      newEntry = {date: date, entry: existingEntry[existingEntry.length - 1].entry + "\n" + input};
      const journalWithoutToday = journal.filter(entryObj => {
        return entryObj.date !== date;
      });
      updatedJournal = [...journalWithoutToday, newEntry];
    } else {
      newEntry = {date: date, entry: input};
      updatedJournal = [...journal, newEntry];
    }

    fetch(`/journal/updateJournal?user=${user}&journal=${JSON.stringify(updatedJournal)}`, {
      method: "PUT"
    })
    .then(res => {
      if (!res.ok) {
        res.text().then(text => {
          console.error(text);
        });
      } else {
        window.location.reload(false);
        setInput("");
      }
    });
  }

  return (
    <div className="new-entry-container">
      <h1 className="entry-header">{date}</h1>
      <textarea className="new-entry-textarea"
                placeholder="Type your entry here"
                value={input}
                onChange={handleChange}
      />
      <Button text="SUBMIT"
              onClick={addEntry}
      />
    </div>
  )
}

export default NewEntry;