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

  const pathName = props?.location?.pathname

  return (
    
    <Navbar expand='lg' sticky='top' className='header'>
      <Link to='/'>
        <Nav.Brand className='header_home'>
          <HomeRounded />
        </Nav.Brand>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Link to='/' className={pathName == '/' ? 'header_link_active' : 'header_link'}>
            Resume
          </Link>
          <Link to='/portfolio' className={pathName == '/portfolio' ? 'header_link_active' : 'header_link'}>
            Portfolio
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header