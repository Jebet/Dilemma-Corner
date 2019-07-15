import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
// import { Card } from "react-bootstrap";
import { FiSend } from "react-icons/fi";

import { connect } from "react-redux";
import ReplyCreate from "../Replies/RepliesCreate";
import { createComment } from "../../Store/actions";
import "./CommentCreate.css";

class CommentCreate extends Component {
  renderError({ error, onSubmit }) {
    if (onSubmit && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, id, meta }) => {
    const className = `field $(meta.error && meta.touched ? 'error: '')`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues, e) => {
    e.preventDefault();
    const model = formValues;
    model.replies = [];
    this.props.createComment(formValues);
  };

  render() {
    return (
      <form
        // onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="description"
          component={this.renderInput}
          placeholder="write your comment here"
          className="description_field"
        />
        <FiSend
          className="send-btn"
          onClick={this.props.handleSubmit(this.onSubmit)}
        />
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.description) {
    errors.description = " you must write a comment";
  }
  return errors;
};

const formWrapped = reduxForm({
  form: "commentCreate",
  validate: validate
})(CommentCreate);

export default connect(
  null,
  { createComment }
)(formWrapped);