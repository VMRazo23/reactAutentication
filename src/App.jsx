import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Inicio from "./components/Inicio"
import Admin from "./components/Admin"
import Menu from "./components/Menu"
import Login from "./components/Login"

function App() {
  return (
    <div className="container">
      <Router>
        <Menu></Menu>
        <Routes>
          <Route exact path={"/"} element={<Inicio/>}/>
          <Route path={"admin"} element={<Admin/>}/>
          <Route path={"login"} element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
