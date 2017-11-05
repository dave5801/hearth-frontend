import React, { PropTypes } from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem, Button} from 'react-bootstrap';
import { Link } from 'react-router';
import config from "../../../../../config"

const Header = React.createClass({
  getInitialState() {
    return {
      isOpen: false
    };
  },

  render() {
    return (
      <div>
        <Navbar id="mainNav" className="navbar-fixed-top affix">
          <Navbar.Header>
            <a className="navbar-brand page-scroll" href="#">{config.app.title}</a>
            <Navbar.Toggle>
              &nbsp;Menu&nbsp;
              <i className="fa fa-bars"></i>
            </Navbar.Toggle>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav className="ml-auto navbar-right">
              <NavItem ref="#">Login</NavItem>
              <NavItem href="#">Resources</NavItem>
              <NavItem href="#">Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
});

export default Header;
