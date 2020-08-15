import React from 'react';
import '../styles/styles.scss';
import {Switch, Route, Redirect} from "react-router-dom";
import {ContextProvider} from "./Context";
import Main from "./Main";
import ProtectedRoute from "./ProtectedRoute";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Redirect to="/main" />
        </Route>
        <ProtectedRoute path="/main">
          <ContextProvider>
            <Main />
          </ContextProvider>
        </ProtectedRoute>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
    
  )
}

export default App;