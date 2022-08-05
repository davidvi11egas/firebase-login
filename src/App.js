import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
import './App.css';
// import Navbar from "../src/components/Navbar/Navbar";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

function App() {
  return (
    <Container fluid>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Events
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
