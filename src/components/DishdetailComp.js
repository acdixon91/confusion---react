import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function renderComments(dish) {
  const comment = dish.comments.map((item) => {
    return (
      <li key={item.id} className="media mt-2 mb-2">
        <div className="media-body">
          <p className="h5">
            <em>{item.comment}</em>
          </p>
          <p className="text-muted">
            -- {item.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(item.date)))}
          </p>
        </div>
      </li>
    );
  });
  return comment;
}

function renderCard(dish) {
  return (
    <Card>
      <CardImg top width="100%" src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle tag="h5">{dish.selectedDish}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

function Dishdetail(props) {
  if (props.dish == null) {
    return <div></div>;
  }
  console.log("Dishdetail is " + props.dish.name);
  return (
    <div className="row">
      <div className="col-12 col-md-5 mt-3 m-1">{renderCard(props.dish)}</div>
      <div className="col-12 col-md-5 m-1">{renderComments(props.dish)}</div>
    </div>
  );
}

export default Dishdetail;
