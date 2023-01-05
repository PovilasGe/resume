import {Route, Routes } from 'react-router-dom';
import React from 'react';
import {Container} from '@mui/system';
import { Grid } from '@mui/material';
import Profile from "./components/Profile/Profile"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Portfolio from "./pages/Portfolio/Portfolio"
import Resume from "./pages/Resume/Resume"
import Contact from "./pages/Contact/Contact"


import './App.css';

function App() {
  return (
<Container className= 'top_60'>
  <Grid container spacing={7}>
    <Grid item xs={12} sm={12} md={4} lg={3}>
      <Profile />
    </Grid>
    <Grid item xs>
    <Header />
    <div className='main_content container_shadow'>
    <Routes>
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
      <Footer />
    </Grid>
  </Grid>
</Container>
  );
}

export default App;
