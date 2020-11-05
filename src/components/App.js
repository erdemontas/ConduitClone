//React
import React from "react";
import { Route, Switch } from "react-router-dom";

//Components
import Header from "./Header";
import Login from "./Login";
import Home from "./Home";
import Register from "./Register";

//Material

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
    </div>
  );
}

export default App;
