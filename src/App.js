import React, { Component } from "react";
import Axios from "axios";
import Search from "./components/search";
import DisplayOwner from "./components/displayOwner";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  handleSubmit = searchText => {
    Axios.get(`https://api.github.com/legacy/repos/search/${searchText}`).then(
      result => this.setState({ data: result.data.repositories })
    );
  };

  render() {
    console.log(this.state.data);
    console.log("from app.js", this.state.searchText);
    return (
      <div>
        <div className="App">Please type repo name</div>
        <Search handleSubmit={this.handleSubmit} />
        {this.state.data ? <DisplayOwner data={this.state.data} /> : ""}
      </div>
    );
  }
}

export default App;
