import React, {useState, useContext, useEffect} from "react";
import LogoutButton from "./LogoutButton";
import {Context} from "./Context";

function Navigation() {
  const {user, journal} = useContext(Context);
  const [entryDates, setEntryDates] = useState([]);
  // const [list, setList] = useState();
  

  // useEffect(() => {
  //   if (user) {
  //     fetch(`/journal/getJournal?user=${user}`)
  //       .then(res => {
  //         if (!res.ok) {
  //           res.text().then(text => {
  //             console.error(text);
  //           });
  //         } else {
  //           res.text().then(text => {
  //             setList(JSON.parse(text));
  //           });
  //         }
  //       });
  //   }
  // }, []);

  useEffect(() => {
    // if (journal) {
      setEntryDates(
        journal.map(entry => {
          return entry.date;
        })
      );
    // }
  }, [journal]);

  return (
    <div>
      <h1>Navigation Menu</h1>
      <p>{user}</p>
      <p>{JSON.stringify(journal)}</p>
      <p>{entryDates}</p>
      <LogoutButton />
    </div>
  )
}

export default Navigation;