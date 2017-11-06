import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }


  render() {
    return (
      <div>
        <Helmet
          title="Hearth"
          titleTemplate="Hearth"
          meta={[
            { charset: 'utf-8' },
            {
              'http-equiv': 'X-UA-Compatible',
              content: 'IE=edge',
            },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            }
          ]}
          script={[
            {"src": "https://code.jquery.com/jquery.min.js", "type": "text/javascript"},
            {"src": "/js/scrollreveal.min.js", "type": "text/javascript"},
            {"src": "/js/bootstrap.min.js", "type": "text/javascript"},
            {"src": "/js/jquery.magnific-popup.min.js", "type": "text/javascript"},
            {"src": "/js/creative.min.js", "type": "text/javascript"}
          ]}
          link={[
              {"rel": "stylesheet", "href": "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"},
              {"rel": "stylesheet", "href": "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"},
              {"rel": "stylesheet", "href": "/css/magnific-popup.css"},
              {"rel": "stylesheet", "href": "/css/creative.min.css"},
          ]}
        />
        <Header
        />
        <div className={styles.container}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
  };
}

export default connect(mapStateToProps)(App);
