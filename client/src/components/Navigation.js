import React, {useContext} from "react";
import LogoutButton from "./LogoutButton";
import {Context} from "./Context";

function Navigation() {
  const {user, journal} = useContext(Context);

  return (
    <div>
      <h1>Navigation Menu</h1>
      <p>{user}</p>
      <p>{JSON.stringify(journal)}</p>
      <LogoutButton />
    </div>
  )
}

export default Navigation;