import React, { Component } from "react";
import Axios from "axios";
import Search from "./components/Search/search";
import RepoList from "./components/Repos/List";

import Display from "./components/Display/Display";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      displayedRepo: null
    };
  }

  searchHandler = word => {
    Axios.get(
      `https://api.github.com/legacy/repos/search/${word}`
    ).then(result => this.setState({ data: result.data.repositories }));
  };

  displayRepoHandler = repo => {
    this.setState({ displayedRepo: repo });
  };

  render() {
    let { data, displayedRepo } = this.state;
    return (
      <div className="App">
        <div className=" d-flex justify-content-end">
          <Search searchItem={this.searchHandler} />
        </div>
        <div className="row mt-3">
          <div className="col-md-6 ">
            {data ? (
              <RepoList
                data={data}
                displayRepoHandler={this.displayRepoHandler}
              />
            ) : (
              ""
            )}
          </div>
          <div className="col-md-6 px-3">
            {this.state.displayedRepo ? (
              <Display selectedRepo={displayedRepo} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
