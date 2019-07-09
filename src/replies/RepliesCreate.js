import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import { connect } from "react-redux";
import { createReply } from "../actions";

class RepliesCreate extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, id, meta }) => {
    const className = `field $(meta.error && meta.touched ? 'error: '')`;
    return (
      <div className={className}>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = formValues => {
    this.props.createReply(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
        style={{ padding: "10px" }}
      >
        <Field
          name="reply"
          component={this.renderInput}
          className="reply_field"
        />
        <button
          className="fa fa-paper-plane"
          style={{
            position: "relative",
            bottom: "52px",
            left: "522px",
            width: "40px",
            height: "38px"
          }}
        />

        {/* <i className="fa fa-paper-plane" /> */}
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.reply) {
    errors.reply = " please write your reply";
  }
  return errors;
};

const formWrapped = reduxForm({
  form: "replyCreate",
  validate: validate
})(RepliesCreate);

export default connect(
  null,
  { createReply }
)(formWrapped);
