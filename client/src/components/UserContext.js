import React, {useState, useEffect} from "react";
const UserContext = React.createContext();

function UserContextProvider(props) {
  const [user, setUser] = useState("");
  
  //Gets username from web token
  useEffect(() => {
    fetch("/user/getUser")
      .then(res => {
        if (!res.ok) {
          res.text().then(text => {
            console.error(text);
          });
        } else {
          res.text().then(text => {
            setUser(text);
          });
        }
      });
  }, []);
  
  return (
    <UserContext.Provider value={user}>
      {props.children}
    </UserContext.Provider>
  )
}

export {UserContextProvider, UserContext};