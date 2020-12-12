import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
// import { baseUrl } from "../shared/baseUrl";
import { FadeTransform, Stagger, Fade } from "react-animation-components";
// import DishDetail2 from "./DishdetailComp";

function RenderMenuItem({ dish }) {
  return (
    <Fade in>
      <Card className="mb-2">
        <Link to={`/menu/${dish.id}`}>
          <CardImg width="100%" src={dish.image} alt={dish.name} className="" />
          <CardImgOverlay>
            <CardTitle className="font-weight-bolder strokeme">
              <h3>{dish.name}</h3>
            </CardTitle>
          </CardImgOverlay>
        </Link>
      </Card>
    </Fade>
  );
}

function Menu(props) {
  const menu = props.dishes.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-6 mt-1 ">
        <Stagger in>
          <RenderMenuItem dish={dish} />
        </Stagger>
      </div>
    );
  });

  if (props.dishes.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.dishes.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.dishes.errMess}</h4>
        </div>
      </div>
    );
  } else
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/Home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row mb-5">{menu}</div>
      </div>
    );
}

export default Menu;

// <div className="row">{this.renderDish(this.state.selectedDish)}</div>
