import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish() {
    if (this.props.dish == null) {
      return <div></div>;
    } else {
      return (
        <Card>
          <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
          <CardBody>
            <CardTitle>{this.props.dish.name}</CardTitle>
            <CardText>{this.props.dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }
  }

  renderComments() {
    if (this.props.dish.comments == null) {
      return <div></div>;
    }

    const comment = this.props.dish.comments.map((item) => {
      return (
        <div key={"key-comment-" + item.id}>
          <h4>{item.comment}</h4>
          -- {item.author},{" "}
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(Date.parse(item.date)))}
          <br />
          <br />
        </div>
      );
    });

    return comment;
  }

  render() {
    if (this.props.dish == null) {
      return <div></div>;
    }

    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">{this.renderDish()}</div>
        <div className="col-12 col-md-5 m-1">{this.renderComments()}</div>
      </div>
    );
  }
}

export default DishDetail;
