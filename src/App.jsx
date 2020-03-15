import React, { Component } from "react";
import UserCanSearchSong from "./components/UserCanSearchSong";
import UserCanSearchArtist from "./components/UserCanSearchArtist";
import FacebookLogin from "./components/FacebookLogin";



class App extends Component {
  state = {
    tracks: "",
    artists: ""
  }

  onChangeHandler = e => {
    this.setState({ [e.track.name]: e.track.name });
  };

  render() {
    return (
      <>
        <div>
          <FacebookLogin />
        </div>

        <label> Search by track</label>
        {<UserCanSearchSong />}

        <label> Search by artists</label>
        {<UserCanSearchArtist />}
      </>
    );
  }
}

export default App;