import React from "react";

const DisplayOwner = props => {
  console.log(props.data);
  return (
    <div>
      {props.data.map((item, i) => (
        <div key={i} className="singleRepo">
          <li
            onClick={() => {
              alert(
                `language:${item.language}
                followers:${item.followers}
                url:${item.url}
                description:${item.description}`
              );
            }}
          >{`${item.owner}/${item.username}`}</li>
        </div>
      ))}
    </div>
  );
};

export default DisplayOwner;
