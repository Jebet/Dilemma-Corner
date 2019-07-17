import React, { Component } from "react";

class ShareCard extends Component {
  render() {
    return (
      <div className="socialShareContainer">
        <div
                className="icon_wrapper"
                onClick={() => this.setState({ modalShow: true })}
            >
                <FaShareAlt className="icon" /> {this.state.toggleButtonText}
                <Modal show={this.state.modalShow} onHide={modalClose} />
            </div>

        <ButtonToolbar className="socialShareContainer">
          <Button
            className="icon_wrapper"
            variant="light"
            onClick={() => this.setState({ modalShow: true })}
          >
            <FaShareAlt className="icon" /> {this.state.toggleButtonText}
          </Button>

          <Modal show={this.state.modalShow} onHide={modalClose} />
        </ButtonToolbar>

        <div className={this.state.shareOpen}>
          <a href={facebookUrl} target="facebookUrl">
            <FaFacebookF />
          </a>
          <a href={linkedinUrl} target="twitterUrl">
            <FaLinkedinIn />
          </a>
          <a href={twitterUrl} target="linkedinUrl">
            <FaTwitter />
          </a>
        </div>
      </div>
    );
  }
}

export default ShareCard;
