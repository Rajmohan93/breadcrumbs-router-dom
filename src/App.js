import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Password from "./components/Password";
import Home from "./components/navigation/Home";
import Dashboard from "./components/navigation/Dashboard";
import Teachers from "./components/navigation/Teachers";
import CreateTeacher from "./components/navigation/CreateTeacher";
import NoMatch from "./components/navigation/NoMatch";

function App() {
  return (
    <div className="App">
      <Password />
      <br/>

      <Router>
        <nav>
          <Link to="home">Home</Link>
          <Link to="dashboard">Dashboard</Link>
          <Link to="teachers">Teachers</Link>
        </nav>
        <br/>

        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="teachers" element={<Teachers />}/>
          <Route path="/teachers/create" element={<CreateTeacher />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;