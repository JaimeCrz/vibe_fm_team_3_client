import React, { Component } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class UserCanSearchArtist extends Component {
  state = {
    query: ""
  };

  onSubmitHandler = async e => {
    try {
      e.preventDefault();
      let response = await axios.get("http://localhost:3000/api/v1/artists", {
        params: {
          q: e.target.elements.query.value
        }
      });
      this.setState({
        artists: response.data.artists
      });
    } catch (error) {
      this.setState({
        errorMessage: error.response.data.error_message
      });
    }
  };

  render() {
    let results;
    let message;
    if (this.state.errorMessage) {
      message = <p id="errorMessage">{this.state.errorMessage}</p>;
    }
    if (this.state.artists) {
      results = this.state.artists.map(artist => {
        return (
          <>
            <div id={"artist-" + artist.name} key={artist.name}>
              <div id="artistName"> {artist.name}</div>
              <p id="genre"> {artist.genre}</p>{" "}
              <p id="songName">{artist.song_name}</p>{" "}
            </div>
          </>
        );
      });
    }

    return (
      <>
        <div>
          <h2>Search for Artist</h2>
        </div>
        <form onSubmit={this.onSubmitHandler}>
          <TextField id="search-field" id="filled-basic" label="Artist Name" variant="filled" name="query" />
          <Button type="submit" id="search">
            Search Artist
          </Button>
        </form>
        <div id="output">
          {results}
          {message}
        </div>
      </>
    );
  }
}
export default UserCanSearchArtist;
