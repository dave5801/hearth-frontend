import React from 'react';
import Helmet from 'react-helmet';
import {styles} from './Homepage.css';
import ResourceList from '../Resources/ResourceList';

const Header = `header`;

export function Home(props) {
  return (
    <div>
      <Header>
        <div className="header-content">
            <div className="header-content-inner">
                <h1 id="homeHeading">Taking care of those in need</h1>
                <hr />
                <p>Let us help you find your way.</p>
                <a href="#about" className="btn btn-primary btn-xl page-scroll">Resources here!</a>
            </div>
        </div>
      </Header>
      <ResourceList />
    </div>
  );
}

export default Home;
