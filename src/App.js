import React, { Component } from "react";
import Axios from "axios";
import Search from "./components/Search/search";
import Repos from "./components/Repos/repos";
import Display from "./components/Display/Display";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      clickedRepoIndex: null
    };
  }

  searchHandler = word => {
    Axios.get(`https://api.github.com/legacy/repos/search/${word}`).then(
      result => this.setState({ data: result.data.repositories })
    );
  };

  displayRepoHandler = a => {
    console.log(a);
    this.setState({ clickedRepoIndex: a });
  };

  render() {
    return (
      <div className="App">
        <div className="searchDetail">
        <div className='SearchInput'>
          <Search searchItem={this.searchHandler} />
          </div>
          <div className='SearchResult'>
          {this.state.data ? (
            <Repos
              data={this.state.data}
              displayRepo={this.displayRepoHandler}
            />
          ) : (
            ""
          )}
          </div>
        </div>
        {this.state.clickedRepoIndex || this.state.clickedRepoIndex === 0 ? (
          <Display
            displayedRepo={this.state.data[this.state.clickedRepoIndex]}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
