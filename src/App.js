import {Route, Routes } from 'react-router-dom';
import React from 'react';
import {Container} from '@mui/system';
import { Grid } from '@mui/material';
import Profile from "./components/Profile/Profile"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Portfolio from "./pages/Portfolio/Portfolio"
import Resume from "./pages/Resume/Resume"


import './App.css';

function App() {
  return (
<Container>
  <Grid container>
    <Grid item xs={12} sm={12} md={4} lg={3}>
      <Profile />
    </Grid>
    <Grid item xs style={{backgroundColor: "red"}}>
      <Header />
      <Routes>
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/' element={<Resume />} />
      </Routes>
      <Footer />
    </Grid>
  </Grid>
</Container>
  );
}

export default App;
