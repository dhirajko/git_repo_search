import React from "react";
import moment from "moment";
import "./display.css";

const display = props => {
  const {
    created,
    description,
    homepage,
    language,
    name,
    owner,
    url
  } = props.selectedRepo;

  return (
    <div className=" card-body border border-dark rounded title shadow-lg p-3 mb-5 bg-white rounded">
      <h3 className="mt-2">Details</h3>
      <table className="table-borderless m-3">
        <tbody>
          <tr>
            <td className="float-left">Repo Name</td>
            <td className="pl-3">:</td>
            <td className="pl-3">{name}</td>
          </tr>
          <tr>
            <td className="float-left">Owner</td>
            <td className="pl-3">:</td>
            <td className="pl-3">{owner}</td>
          </tr>
          <tr>
            <td className="float-left">Language </td>
            <td className="pl-3">:</td>
            <td className="pl-3">{language}</td>
          </tr>
          <tr>
            <td className="float-left">Homepage</td>
            <td className="pl-3">:</td>
            <td className="pl-3">{homepage}</td>
          </tr>
          <tr>
            <td className="float-left">Created On</td>
            <td className="pl-3">:</td>
            <td className="pl-3">{moment(created).format("Do MMM YY")}</td>
          </tr>
          <tr>
            <td className="float-left">Link</td>
            <td className="pl-3">:</td>
            <td className="pl-3">
              <a href={url}>click here</a>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="text-justify p-3">{description}</div>
    </div>
  );
};

export default display;
