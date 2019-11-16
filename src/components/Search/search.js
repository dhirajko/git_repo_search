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
    return (
      <Form className="Search mt-2">
        <FormGroup className="d-flex align-items-center">
          <Input
          className="mr-2"
            type="text"
            name="search"
            id="search"
            placeholder="keyword"
            onChange={this.changeKeyword}
          />
          <Button className="m-0"
            onClick={() => {
              this.props.searchItem(this.state.inputValue);
            }}
          >
            Search
          </Button>
        </FormGroup>
      </Form>
    );
  }
}
