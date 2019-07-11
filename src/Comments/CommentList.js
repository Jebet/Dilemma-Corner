import React from "react";

import { connect } from "react-redux";
import { FiShare2, FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { fetchComments, fetchReplies } from "../actions";
import "./CommentList.css";
import Replies from "../replies/RepliesList";
import Comments from "./CommentCreate";
import NewReplies from "../replies/RepliesCreate";
import replyReducer from "../reducers/replyReducer";

const AllReplies = ({ item }) => {
  const {replies = []} = item;
  return (
    <div className="col m-3">
        {replies.map((reply, i) => (    
          <Replies reply={reply} key={i} />
        ))}
        <NewReplies comment={item}/>
    </div>
  );
}
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
  componentDidMount() {
    this.props.fetchComments();
    this.props.fetchReplies();
  }

  renderComments() {
    return this.props.comments.map((comment, i) => {
      return (
        <div key={i} className="card-body">
          <div className="row">
            <div style={{ width: "15%" }} className="text-center">
              <img
                src="https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s615/3_Beautiful-girl-with-a-gentle-smile.jpg"
                style={{ width: "50px", height: "50px" }}
                className="thumbnail rounded-circle"
              />
            </div>
            <div style={{ width: "75%" }}>
              <div className="userId">{comment.name}</div>
              <div className="text">
                <p> {comment.description}</p>
              </div>
            </div>
          </div>

          <div className="footer-icons">
            <div className="row">
              <div className="col" onClick={this.increment}>
                <FiThumbsUp />
                <span>{this.state.count}</span> Upvote
              </div>
              <div className="col" onClick={this.decrement}>
                <FiThumbsDown />
                <span>{this.state.count}</span> Downvote
              </div>
              <div className="col">
                <FiShare2 /> share
              </div>
            </div>
          </div>

          <div className="row">
              <AllReplies item={comment} />
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="card" style={{ backgroundColor: "white" }}>
        {this.renderComments()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: Object.values(state.comments),
    count: state.count,
    replies: Object.values(state.replies)
  };
};
export default connect(
  mapStateToProps,
  { fetchComments, fetchReplies }
)(CommentList);
