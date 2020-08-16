import React, {useContext} from "react";
import {Context} from "./Context";

function ThemeSwitch() {
  const {user, theme} = useContext(Context);

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    fetch(`/theme/updateTheme?user=${user}&theme=${newTheme}`, {
      method: "PUT"
    })
    .then(res => {
      if (!res.ok) {
        res.text().then(text => {
          console.error(text);
        });
      } else {
        window.location.reload(false);
      }
    });
  }

  //Changes which switch icon to display depending on the current theme
  const switchIcon = theme === "light" ? "fa-toggle-off" : "fa-toggle-on";

  return (
    <div className="theme-switch-container">
      <span className="theme-switch-label">Switch Theme: </span>
      <button className={"theme-switch fas " + switchIcon}
            onClick={toggleTheme}>
      </button>
    </div>
    
    )
}

export default ThemeSwitch;