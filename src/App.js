import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

// import Navbar from "../src/components/Navbar/Navbar";

import Login from "./Login.js";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Login}/>
      </Routes>
    </Router>
  );
}

export default App;
