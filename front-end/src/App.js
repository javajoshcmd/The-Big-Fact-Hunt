import "./App.css";
import React from "react";
// import Settings from "./settings";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'


const App = () => {
  return (
    <Router>
    {/* <div className="App">
      <h1 className="header">The Big Fact Hunt</h1>
      <Settings />
    </div> */}
    <Route path='/' exact component={Home}/>
    <Route path='/about' component={About}/>
    </Router>
   
  );
}

export default App;
