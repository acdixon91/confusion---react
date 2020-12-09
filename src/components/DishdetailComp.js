import React, { useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Row,
  Label,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

function DisplayWindow(dish, comments) {
  useEffect(() => {
    if (dish != null) {
      document.title = "Dish: " + dish.name;
    }
  });
}

function handleSubmit(values, props) {
  console.log("Dish ID is: " + props.dish.id);
  props.postComment(
    props.dish.id,
    values.rating,
    values.author,
    values.comment
  );
  console.log("Current state is: " + JSON.stringify(values));
}

function RenderComments(comments) {
  const comment = comments.map((item) => {
    return (
      <li key={item.id} className="media mt-2 mb-2">
        <div className="media-body">
          <p className="h5">
            <em>{item.comment}</em>
          </p>
          <p className="text-muted">
            - {item.author},{" "}
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
      <CardImg top width="100%" src={baseUrl + dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle tag="h5">{dish.selectedDish}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

function Dishdetail(props) {
  const [modal, setModal] = useState(false);
  // console.log("Dishdetail triggered");

  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else DisplayWindow(props.dish, props.comments);

  if (props.dish == null) {
    return <div></div>;
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/Home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row mb-3 mt-3">
          <div className="col-12 col-md-5">{RenderDish(props.dish)}</div>
          <div className="col-12 col-md-5">
            <h3 className="mt-2 mb-4">Comments</h3>
            {RenderComments(props.comments)}
            <Button
              type="button"
              className="bg-primary mt-2"
              onClick={toggleModal}
            >
              <i className="fa fa-pencil fa-lg"></i> Submit Comment
            </Button>
          </div>
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Submit Review</ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(values) => handleSubmit(values, props)}>
            <Row className="form-group">
              <Label htmlFor="rating" md={3}>
                Rating
              </Label>
              <Col md={12}>
                <Control.select
                  model=".rating"
                  name="rating"
                  className="form-control"
                >
                  <option>5</option>
                  <option>4</option>
                  <option>3</option>
                  <option>2</option>
                  <option>1</option>
                </Control.select>
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="author" md={3}>
                Your Name
              </Label>
              <Col md={12}>
                <Control.text
                  model=".author"
                  id="author"
                  name="author"
                  placeholder=""
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(4),
                    maxLength: maxLength(20),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".author"
                  show="touched"
                  messages={{
                    required: "Required... ",
                    minLength: "Must be greater than 4 numbers",
                    maxLength: "Must be 20 numbers or less",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="comment" md={3}>
                Comments
              </Label>
              <Col md={12}>
                <Control.textarea
                  model=".comment"
                  id="comment"
                  name="comment"
                  placeholder=""
                  className="form-control"
                  rows="10"
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={{ size: 10 }}>
                <Button type="submit" color="primary" onClick={toggleModal}>
                  Submit Review
                </Button>
              </Col>
            </Row>
          </LocalForm>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}

export default Dishdetail;
