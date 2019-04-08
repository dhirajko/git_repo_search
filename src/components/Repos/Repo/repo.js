import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

const repo = props => {
  return (
    <div className="Repo">
      <Card>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.owner>10?(props.owner.substring(0,7)+"..."):(props.owner)}</CardSubtitle>
          <div
            onClick={() => {
              props.display(props.index);
            }}
            value={props.index}
          >
            <Button>Detail</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default repo;
