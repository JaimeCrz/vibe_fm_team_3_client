import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    query: "",
    song_not_found: {}
  };

  onSubmitHandler = async e => {
    e.preventDefault();
    let response = await axios.get("http://localhost:3000/api/v1/tracks", {
      params: {
        q: e.target.elements.query.value
      }
    });

    if (response.status === 200) {
      this.setState({
        tracks: response.data.tracks
      })
    } else {
      debugger
      this.setState({
        song_not_found: "There is no matches for the song you are trying to search"
      })
    }
  };

  render() {
    return (

      <>
      <form onSubmit={this.onSubmitHandler}>
        <input
          id="search-field"
          name="query"
          onChangeHandler={this.onChangeHandler}
        />
        
        <button type="submit" id="search">
          {" "}
          Search
        </button>
      </form>
      <div>

      <p>There is no matches for the song you are trying to search =D. </p>

      </div>
      </>
    );
  }
}

export default App;
