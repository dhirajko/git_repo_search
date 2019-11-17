import React from "react";
import "./search.css";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  changeKeyword = event => {
    this.setState({
      inputValue: event.target.value
    });
  };
  render() {
    let { data } = this.props;
    return (
      <div className={data ? "w-75 mt-2" : "w-75 mt-2 searchBar"}>
        <Form>
          <FormGroup className="d-flex align-items-center">
            <Input
              className="mr-2"
              type="text"
              name="search"
              id="search"
              value={this.state.inputValue || ""}
              placeholder="git repository name to search..."
              onChange={this.changeKeyword}
              onKeyPress={event => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  this.props.searchItem(this.state.inputValue);
                }
              }}
            />
            <Button
              className="m-0"
              onClick={() => {
                this.props.searchItem(this.state.inputValue);
                this.setState({
                  inputValue:""
                });
              }}
            >
              Search
            </Button>
          </FormGroup>
        </Form>
        {!data ? (
          <p className="mt-4 text-justify">
            This application is search git repositories from the given key word.
            There may thousands of repositories with the give key word. The api
            fetch first 100 repositories and display the details. In order to go
            to selected repository please click the link in the given
            information box.
          </p>
        ) : (
          ""
        )}
      </div>
    );
  }
}
