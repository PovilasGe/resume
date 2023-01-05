import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  HomeRounded,
  SchoolRounded,
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
  Telegram,
} from "@mui/icons-material";
import { Link, NavLink, withRouter, Routes, Route, useLocation} from "react-router-dom";
import Resume from "../../pages/Resume/Resume";
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";
import './Header.css'


const Header = (props) => {
  const location = useLocation();
  const pathName = location?.pathname;

  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Link to="/">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className='header_left'>
          <Link
            to="/"
            className={pathName == "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Link>
          <Link
            to="/portfolio"
            className={
              pathName == "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Link>
        </Nav>

        <div className='header_right'>
          {Object.keys(resumeData.socials).map(key => (
            <a href={resumeData.socials[key].link} target='_blank' rel='noreferrer'>{resumeData.socials[key].icon}</a>
          ))}
          {/* <CustomButton text={'Hire Me'} icon={<Telegram/>}/> */}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
