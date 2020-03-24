import React, { Component } from "react";
import UserCanSearchSong from "./components/UserCanSearchSong";
import UserCanSearchArtist from "./components/UserCanSearchArtist";
import FacebookLogin from "./components/FacebookLogin";
import LoginForm from "./components/LoginWithAuth";
import { authenticate } from './modules/authentication'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class App extends Component {
  state = {
    renderLoginForm: false,
    authenticated: false,
    message: ""
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLogin = async e => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: response.message, renderLoginForm: false });
    }
  };

  render() {
    const { renderLoginForm, authenticated, message } = this.state;
    let renderLogin;
    switch(true) {
      case renderLoginForm && !authenticated:
        renderLogin = <LoginForm submitFormHandler={this.onLogin} />;
        break;
      case !renderLoginForm && !authenticated:
        renderLogin = (
          <>
            <Button
              variant="outlined" 
              color="primary"
              id="login"
              onClick={() => this.setState({ renderLoginForm: true })}
            >
              Login
            </Button>
            <p>{message}</p>
          </>
        );
        break;
      case authenticated:
        renderLogin = (
          <p>Hi {JSON.parse(sessionStorage.getItem("credentials")).uid}</p>
        );
        break;
    }

    return (
      <>
        <div>
          {renderLogin}
        </div>

        <div>
          {/* <FacebookLogin /> */}
        </div>
        <div id='body'>
      <Grid container spacing={5}>
        <Grid item xs={4}>
          <Paper>
          {this.state.authenticated === true && <UserCanSearchSong />}
          </Paper>
      </Grid>
        <Grid item xs={4}>
          <Paper>
          {this.state.authenticated === true && <UserCanSearchArtist />}
          </Paper>
        </Grid>
        </Grid>
        </div>
      </>
    );
  }
}

export default App;