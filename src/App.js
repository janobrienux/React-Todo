import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import Greeting from "./components/Greeting";
import Nav from "./components/Nav";
import TodoList from "./components/TodoList";
import {  Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Clock />
        </Route>
        <Route path="/list">
          <Greeting />
          <TodoList />
        </Route>
      </Switch>
    </>
  );
}

export default App;
