import React from 'react'
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  HomeRounded,
  SchoolRounded,
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
  Telegram,
} from '@mui/icons-material'
import {Link, NavLink, withRouter, Routes, Route} from "react-router-dom"



const Header = (props) => {

  const pathName = props?.location?.pathame;

  return (

    <Navbar expand='lg' sticky='top' className='header'>
      <Routes>
      <Route path='/'>
        <Navbar.Brand className='header_home'>
          <HomeRounded />
        </Navbar.Brand>
      </Route>

      <Navbar.Toggle />
      
      <Navbar.Collapse>
        <Nav>
          <Route path='/' className={pathName == '/' ? 'header_link_active' : 'header_link'}>
            Resume
          </Route>
          
          <Route path='/portfolio' className={pathName == '/portfolio' ? 'header_link_active' : 'header_link'}>
            Portfolio
          </Route>
        </Nav>
      </Navbar.Collapse>
      </Routes>
    </Navbar>
  )
}

export default Header