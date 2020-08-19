import React, {useState, useEffect} from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const [user, setUser] = useState("");
  const [journal, setJournal] = useState([]);
  const [theme, setTheme] = useState("light");
  const [forceUpdate, setForceUpdate] = useState(true);

  useEffect(() => {
    //Gets username from web token
    fetch("/user/getUser")
      .then(res => {
        if (!res.ok) {
          res.text().then(text => {
            console.error(text);
          });
        } else {
          res.text().then(text => {
            setUser(text);
            //Gets current user's journal from database
            fetch(`/journal/getJournal?user=${text}`)
              .then(res => {
                if (!res.ok) {
                  res.text().then(text => {
                    console.error(text);
                  });
                } else {
                  res.text().then(text => {
                    setJournal(JSON.parse(text));
                  });
                }
              });
            //Gets current user's theme setting from database
            fetch(`/theme/getTheme?user=${text}`)
            .then(res => {
              if (!res.ok) {
                res.text().then(text => {
                  console.error(text);
                });
              } else {
                res.text().then(text => {
                  setTheme(text);
                });
              }
            });
          });
        }
      });
  }, [forceUpdate]);

  
  //Forces rerender of Context
  function updateContext() {
    setForceUpdate(prev => !prev);
  }
  

  return (
    <Context.Provider value={{user: user, journal: journal, theme: theme, updateContext: updateContext}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context};