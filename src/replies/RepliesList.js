import React, { Component } from "react";
import replyReducer from "../reducers/replyReducer";
import { fetchReplies } from "../actions";
import { FiShare2, FiThumbsDown, FiThumbsUp } from "react-icons/fi";

import { connect } from "react-redux";

class RepliesList extends Component {
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

  renderReplyList() {
    const reply = this.props.reply;
    return (
      <div className="card-body ml-5">
        <div className="row">
          <div className="text-center" style={{ width: "15%" }}>
            <img
              src="https://i.pinimg.com/736x/b9/fe/0b/b9fe0b9b07b04ce334d1627ff84ba103.jpg"
              style={{ width: "50px", height: "50px" }}
              className="thumbnail rounded-circle"
            />
          </div>
          <div style={{ width: "75%" }}>
            <div className="userId">{reply.id}</div>
            <div className="text">
              <p>{reply.description}</p>
            </div>
          </div>
        </div>

        <hr />
        <div className="footer-icons">
          <div className="row">
            <div className="col" onClick={this.increment}>
              <FiThumbsUp />
              <span>{this.state.count}</span> upvote
            </div>
            <div className="col" onClick={this.decrement}>
              <FiThumbsDown />
              <span>{this.state.count}</span>downvote
            </div>
            <div className="col">
              <FiShare2 />
              share
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div
        style={{
          margin: "0 auto",
          position: "relative"
        }}
      >
        {this.renderReplyList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
    replies: Object.values(state.replies)
  };
};
export default connect(
  mapStateToProps,
  { fetchReplies }
)(RepliesList);
