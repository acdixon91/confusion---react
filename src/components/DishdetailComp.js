import React, { useEffect } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function Hook(dish) {
  const dishName = dish.name;
  useEffect(() => {
    console.log("DishDetail useEffect() is invoked");

    if (dish != null) {
      document.title = "Dish: " + dishName;
    }
  });
}

function RenderComments(dish) {
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

function RenderDish(dish) {
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
  Hook(props.dish);

  if (props.dish == null) {
    return <div></div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 mt-3">{RenderDish(props.dish)}</div>
        <div className="col-12 col-md-5">
          <h3 className="mt-2 mb-4">Comments</h3>
          {RenderComments(props.dish)}
        </div>
      </div>
    </div>
  );
}

export default Dishdetail;
