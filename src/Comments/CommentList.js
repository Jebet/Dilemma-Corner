import React from "react";
import { Card } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { connect } from "react-redux";
import { fetchComments, fetchReplies } from "../actions";
import "./CommentList.css";
import replyReducer from "../reducers/replyReducer";

class CommentList extends React.Component {
  state = { count: 0 };

  increment = increment => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = decrement => {
    this.setState({
      count: this.state.count - 1
    });
  };
  componentDidCatch() {
    this.props.fetchComments();
    this.props.fetchReplies();
  }

  renderList() {
    return this.props.comments.map(comment => {
      return (
        <Card style={{ backgroundColor: "white" }}>
          <Card.Body>
            <div className="comment-displayed">
              <Row>
                <Image
                  src="https://www.facebook.com/alorraine1"
                  roundedCircle
                  style={{ padding: "5px" }}
                />
                <div className="userId" style={{ padding: "5px" }}>
                  {comment.id}
                </div>
                <div className="text" style={{ padding: "5px" }}>
                  {comment.description}
                </div>
                {/* <div className="reply">{reply.reply}</div> */}
              </Row>
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="footer-icons">
              <i className="fa fa-thumbs-o-up" onClick={this.increment}>
                <span>{this.state.count}</span> upvote
              </i>
              <i className="fa fa-thumbs-o-down" onClick={this.decrement}>
                <span>{this.state.count}</span>downvote
              </i>
              <i className="fa fa-share-alt">share</i>
            </div>
          </Card.Footer>
        </Card>
      );
    });
  }
  render() {
    // console.log(this.props.comments);
    return (
      <div
        style={{
          margin: "0 auto",
          position: "relative"
        }}
      >
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: Object.values(state.comments),
    count: state.count
  };
};
export default connect(
  mapStateToProps,
  { fetchComments }
)(CommentList);
