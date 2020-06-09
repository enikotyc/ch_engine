import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavagationBar from "./components/NavagationBar";
import Background from "./components/Background";
import Button from './components/Buttons';
function App() {
  return (
    <Router>
      <Background></Background>
      <Button></Button>
      <div className = "container">
        <NavagationBar/>
      </div>
    </Router>
    
  );
}


export default App;
