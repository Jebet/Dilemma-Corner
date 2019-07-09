import React from "react";
import { Card } from "react-bootstrap";
import Comments from "./Comments/CommentCreate";
import Replies from "./replies/RepliesCreate";
import ModalPopUp from "./share/modalShare";

import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalShow: false,
      shareOpen: "closeShare"
    };
    this.shareOpenToggle = this.shareOpenToggle.bind(this);
   
  }
  shareOpenToggle() {
    if (this.state.shareOpen === "closeShare") {
      this.setState({
        shareOpen: "openShare"
      });
    } else {
      this.setState({
        shareOpen: "closeShare",
        toggleButtonText: "  Share"
      });
    }
  }
  handleClose() {
    this.setState({ show: false });
  }
  render() {
    let modalClose = () => this.setState({ modalShow: false });

    const url = window.location.href;
    //URL patterns for Social media sites share functionalities
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    const twitterUrl = `https://twitter.com/home?status=${url}`;
    const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;
    return (
      <div>
        <Card onClick={this.handleClose}>
          <Card.Header style={{ backgroundColor: "white" }}>
            {" "}
            <Card.Title>
              Question
              <div className="titleIcons">
                <span className="fa fa-bookmark-o" />
                <span
                  className="fa fa-share-alt "
                  style={{ position: "relative", left: "460px", bottom: "0px" }}
                  onClick={() => this.setState({ modalShow: true })}
                  variant="light"
                >
                  {this.state.toggleButtonText}
                  <ModalPopUp show={this.state.modalShow} onHide={modalClose} />
                </span>
              </div>
            </Card.Title>
          </Card.Header>
          <Card.Body style={{ backgroundColor: "#e2e1e0" }}>
            <Card.Text bg="grey">
              <b>
                Steven had been in a relationship with Emily for two years when
                he cheated on her with Stephanie. Although Steven was the one in
                a relationship, Stephanie knew that he was taken and yet pursued
                Steven and then slept with him anyway. Who’s more in the wrong?
              </b>
            </Card.Text>
            <Card.Text className="impression">
              <div className="ui red label" alt="category">
                Music
              </div>
              <i className="eye icon" />
              180 views
              <h7 className="timeStamp">28-Aug-19</h7>
            </Card.Text>
            <Card.Text className="">
              <div className="ui blue image label">
                <i className="edit outline icon" />
                Replies
                <div className="detail">31</div>
              </div>

              <div className="ui blue image label">
                <i className="edit outline icon" />
                Replies
                <div className="detail">31</div>
              </div>

              <div className="ui blue image label">
                <i className="rss icon" />
                Following
                <div className="detail">23</div>
              </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: "white" }}>
            <Comments />
            {/* <Replies /> */}
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default Header;
