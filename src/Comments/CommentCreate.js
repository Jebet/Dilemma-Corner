import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Card } from "react-bootstrap";

import { connect } from "react-redux";
import { createComment } from "../actions";

class CommentCreate extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
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

  onSubmit = formValues => {
    this.props.createComment(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="description"
          component={this.renderInput}
          label="write your comment here!"
          className="description_field"
        />
        <button
          className="fa fa-paper-plane "
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
