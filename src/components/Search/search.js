import React from 'react';
import './search.css'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class Search extends React.Component {
constructor(props){
  super(props);
  this.state={
    inputValue :""
  }
}

changeKeyword=event=>{
  this.setState({
    inputValue: event.target.value
  });
}
  render() {
    return (
      <Form className='Search'>
        <FormGroup>
          <Label for="search">Type here</Label>
          <Input type="text" name="search" id="search" placeholder="keyword" onChange={this.changeKeyword}/>
          <Button onClick={()=>{this.props.searchItem(this.state.inputValue)}} >Search</Button>
        </FormGroup>        
      </Form>
    );
  }
}