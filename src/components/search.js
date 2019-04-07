import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: ""
    };
  }
  handleChange = e => {
    this.setState({ searchItem: e.target.value });
  };
  handleClick = () => {
    this.props.handleSubmit(this.state.searchItem);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.searchItem}
          onChange={e => this.handleChange(e)}
        />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default Search;
