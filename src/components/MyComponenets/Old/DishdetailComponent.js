import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
    };
  }

  renderComments(comments) {
    return (
      <li key={comments.id} className="media mt-2 mb-2">
        <div className="media-body">
          <p className="h5">
            <em>{comments.comment}</em>
          </p>
          <p className="text-muted">
            -- {comments.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(comments.date)))}
          </p>
        </div>
      </li>
    );
  }

  render() {
    const dish = this.props.dish;
    if (dish == null) {
      return <div></div>;
    } else {
      const allComments = this.props.dish.comments.map((comments) => {
        return this.renderComments(comments);
      });

      return (
        <div className="row">
          <div className="col-12 col-md-5 mt-3">
            <Card>
              <CardImg
                top
                width="100%"
                src={this.props.dish.image}
                alt={this.props.dish.name}
              />
              <CardBody>
                <CardTitle tag="h5">{this.props.dish.selectedDish}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 ml-1 mt-3">
            <h4 className="mt-0 font-weight-bold mb-4">Comments</h4>
            <ul className="list-unstyled">
              <li className="media-row">{allComments}</li>
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default Dishdetail;
