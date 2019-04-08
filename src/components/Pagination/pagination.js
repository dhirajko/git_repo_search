import React from "react";
import { Button, ButtonGroup, ButtonToolbar } from "reactstrap";

const pageButton = props => {
  return (
    <ButtonToolbar>
      <ButtonGroup>
        <Button onClick={props.previousPage}>{"<"}</Button>
        <Button>{props.pageNumber}</Button>
        <Button onClick={props.nextPage}>{">"}</Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
};

export default pageButton