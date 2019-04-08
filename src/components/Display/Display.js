import React from "react";
import { Jumbotron} from "reactstrap";
import "./display.css";

const display = props => {
  return (
    <div className="RepoDisplay">
      <Jumbotron>
        <h1 className="display-3">{props.displayedRepo.name}</h1>
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">Username : {props.displayedRepo.owner}</th>
            </tr>
            <tr>
              <th scope="row">Language : {props.displayedRepo.language}</th>
            </tr>
            <tr>
              <th scope="row">Followers: {props.displayedRepo.followers}</th>
            </tr>
            <tr>
              <th scope="row">
                Link : <a href={props.displayedRepo.url}>click here</a>
              </th>
            </tr>
          </tbody>
        </table>
        <p className="lead">
          {props.displayedRepo.description}
        </p>
      </Jumbotron>
    </div>
  );
};

export default display;
