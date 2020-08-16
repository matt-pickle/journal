import React, {useState, useContext, useEffect} from "react";
import ThemeSwitch from "./ThemeSwitch";
import NavLink from "./NavLink";
import LogoutButton from "./LogoutButton";
import {Context} from "./Context";

function Navigation(props) {
  const {user, journal, theme} = useContext(Context);
  const [entryDates, setEntryDates] = useState([]);

  //Creates nav links for previous entries
  useEffect(() => {
    setEntryDates(
      journal.map(entry => {
        return <NavLink text={entry.date}
                        onClick={() => props.displayEntry(entry.date)}
               />;
      })
    );
  }, [journal]);

  return (
    <div className={"nav-container " + props.isNavOpen + " " + theme} >
      <button class="close-nav-button"
              onClick={props.closeNav}
      >&times;</button>
      <h2 className="greeting">Hello, {user}!</h2>
      <ThemeSwitch />
      <LogoutButton />
      <p className="previous-entries">Previous Entries:</p>
      <div className="nav-links-container">{entryDates}</div>
      
    </div>
  )
}

export default Navigation;