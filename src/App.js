import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import Greeting from './components/Greeting';
import Nav from './components/Nav';
import TodoList from "./components/TodoList";
import {Route, BrowserRouter as Router} from "react-router-dom";



function App() {
  return (
      <Router>
    <div className="todo-app">
       < Nav/>
      <Greeting/>
       <Clock/>
      <TodoList/> 
    </div>

    </Router>
  );
}

export default App;

