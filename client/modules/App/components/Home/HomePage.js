import React from 'react';
import { styles } from './Homepage.css'; // eslint-disable-line
import ResourceList from '../Resources/ResourceList';
import Contact from '../Contact/Contact';
const Header = 'header';

export function Home() {
  return (
    <div>
      <Header>
        <div className="header-content">
          <div className="header-content-inner">
            <h1 id="homeHeading">Taking care of those in need</h1>
            <hr />
            <p>Let us help you find your way.</p>
            <a href="#resources" className="btn btn-primary btn-xl page-scroll">Resources here!</a>
          </div>
        </div>
      </Header>
      <ResourceList />
      <Contact />
    </div>
  );
}

export default Home;
