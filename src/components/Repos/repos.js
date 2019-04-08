import React, { Component } from "react";
import Repo from "./Repo/repo";
import PageButton from "../Pagination/pagination";

class getMappedData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      currentPage: 1,
      maxPage: Math.ceil(this.props.data.length / 5),
      displayDataArray:
        this.props.data.length > 5
          ? this.props.data.slice(0, 5)
          : this.props.data
    };
  }

  

  nextPage = () => {
    if (this.state.maxPage > this.state.currentPage) {
      let previousPage = this.state.currentPage;
      let upcomingPage = previousPage + 1;
      let lastRepo = upcomingPage * 5;
      if (this.props.data.length < lastRepo) {
        lastRepo = this.props.data.length;
      }
      let selectedArray = this.props.data.slice(upcomingPage * 5 - 5, lastRepo);
      this.setState({
        currentPage: upcomingPage,
        displayDataArray: selectedArray
      });
    }
  };
  previousPage = () => {
    if (this.state.currentPage > 1) {
      let currentPage = this.state.currentPage;
      let upcomingPage = currentPage - 1;
      let lastRepo = upcomingPage * 5;
      let selectedArray = this.props.data.slice(upcomingPage * 5 - 5, lastRepo);
      this.setState({
        currentPage: upcomingPage,
        displayDataArray: selectedArray
      });
    }
  };

  componentDidUpdate(prevState) {
    if (prevState.data !== this.state.data) {
      this.setState({
              displayDataArray: this.state.data.length > 5
              ? this.state.data.slice(0, 5)
              : this.state.data
            })
      
    }
  }
  
  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.data!==prevState.data){
      return {data : nextProps.data};
    }
    else return null;
  }


  render() {
    return (
      <div className="ResultRepos">
        <div className="Repos">
          {this.state.displayDataArray.map((item, index) => (
            <div className="Repo">
            <Repo
              name={item.name}
              owner={item.owner}
              key={index}
              display={this.props.displayRepo}
              index={(this.state.currentPage - 1) * 5 + index}
            />
            </div>
          ))}
        </div>
        <div className="PageNumber">
          <PageButton
            nextPage={this.nextPage}
            previousPage={this.previousPage}
            pageNumber={this.state.currentPage}
          />
        </div>
      </div>
    );
  }
}

export default getMappedData;
