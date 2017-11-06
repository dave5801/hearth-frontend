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
  componentDidMount() {
    $('#scrollRoot').scrollspy({
      target: '.navbar-fixed-top',
      offset: 51
    });
    $(document).on('click', 'a.page-scroll', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
    });
    $('#mainNav').affix({
      offset: {
        top: 100
      }
    })
  },
  render() {
    return (
      <div id="scrollRoot">
        <Navbar id="mainNav" fixedTop fluid>
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
