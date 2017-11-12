import React from 'react';
import { Link } from 'react-router';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

const Login = React.createClass({
  getInitialState() {
    return {
      username: '',
      password: ''
    };
  },
  getValidationState() {
    //return 'success', 'warning', or 'error'
    return null;
  },
  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  },
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  },
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-xs-10">
              <form>
                <FormGroup
                  controlId="formBasicText"
                  validationState={this.getValidationState()}
                >
                  <ControlLabel>Username</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.username}
                    placeholder=""
                    onChange={this.handleUsernameChange}
                  />
                  <ControlLabel>Password</ControlLabel>
                  <FormControl
                    type="password"
                    value={this.state.password}
                    placeholder=""
                    onChange={this.handlePasswordChange}
                  />
                  <FormControl.Feedback />
                  <HelpBlock>*Help Text*.</HelpBlock>
                </FormGroup>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
});

export default Login;