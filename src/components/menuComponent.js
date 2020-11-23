import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
// import DishDetail2 from "./DishdetailComp";

function RenderMenuItem({ dish, onClick }) {
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle className="font-weight-bolder">
          <h4>{dish.name}</h4>
        </CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

function Menu(props) {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 mt-1 ">
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{menu}</div>
    </div>
  );
}

export default Menu;

// <div className="row">{this.renderDish(this.state.selectedDish)}</div>
