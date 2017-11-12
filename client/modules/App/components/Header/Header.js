import React, { PropTypes } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import config from "../../../../../config"
import { browserHistory } from 'react-router';
import { styles } from './Header.css';
import { withRouter } from 'react-router';

const Header = React.createClass({
  getInitialState() {
    return {
      isOpen: false,
      activeLink: "/"
    };
  },
  getActiveLink() {
    //this is super hacky, but needed to get this navbar styling to work...
    if (window.location.href.includes("/resource")) {
      return "/resources"
    } else if (window.location.href.includes("/login")) {
      return "/login"
    } else {
      return "/";
    }
  },
  componentDidMount() {
    if (this.state.activeLink != this.getActiveLink()) {
      this.setState({ activeLink: this.getActiveLink() });
    }
    $('#scrollRoot').scrollspy({
      target: '.navbar-fixed-top',
      offset: 51
    });
    $(document).on('click', 'a.page-scroll', function (event) {
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
  goToRoute(route) {
    browserHistory.push(route)
    this.setState({
      activeLink: route
    });
  },
  render() {
    return (
      <div id="scrollRoot">
        <Navbar id="mainNav" fixedTop fluid className={this.state.activeLink == "/" ? "" : "black-header"}>
          <Navbar.Header>
            <NavItem onSelect={this.goToRoute.bind(this, "/")}
              className="navbar-brand page-scroll">
              {config.app.title}
            </NavItem>
            <Navbar.Toggle>
              &nbsp;Menu&nbsp;
              <i className="fa fa-bars"></i>
            </Navbar.Toggle>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav className="ml-auto navbar-right">
              <NavItem onSelect={this.goToRoute.bind(this, "/login")}
                className={this.state.activeLink == "/login" ? "active" : ""}>
                Login
              </NavItem>
              <NavItem onSelect={this.goToRoute.bind(this, "/resources")}
                className={this.state.activeLink == "/resources" ? "active" : ""}>
                Resources
              </NavItem>
              <NavItem>Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
});

export default withRouter(Header);
