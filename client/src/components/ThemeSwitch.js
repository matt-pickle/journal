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

  return (
    <div className="theme-switch">
      <p>Theme: {theme}</p>
      <button onClick={toggleTheme}>Switch Theme</button>
    </div>
  )
}

export default ThemeSwitch;