import React, {useState} from "react";
import Button from "./Button";
import {Link} from "react-router-dom";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState();

  function handleNameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleClick() {
    fetch(`/user/login?username=${username}&password=${password}`, {
      method: "POST"
    })
    .then(res => {
      if (!res.ok) {
        //Gives error message if login is not successful
        res.text().then(text => {
          setMessage(text);
          console.error(text);
        })
      } else {
        //Redirects to home page if login is successful
        props.history.push("/main");
      }
    });
    setUsername("");
    setPassword("");
  }

  return (
    <div className="register-container">
      {message ? <p>***{message}***</p> : null}
      <div className="reg-input-box">
        <label htmlFor="reg-username" className="reg-label">Username:</label>
        <input type="text"
                id="reg-username"
                value={username}
                onChange={handleNameChange}
        />
      </div>
      <div className="reg-input-box">
        <label htmlFor="reg-password" className="reg-label">Password:</label>
        <input type="password"
                id="reg-password"
                value={password}
                onChange={handlePasswordChange}
        />
    </div>
    <Button text="LOGIN"
            onClick={handleClick}
      />
    <p className="reg-text">Don't have an account?</p>
    <Link to="/register">
      <Button text="REGISTER NEW USER" />
    </Link>
    <p className="guest-text"> or enter "guest"
    <br/>as username and password</p>
  </div>
  )
}

export default Login;