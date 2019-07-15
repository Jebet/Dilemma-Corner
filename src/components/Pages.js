import React from "react";
import Moment from "react-moment";
import { FiMessageCircle, FiRss, FiEye } from "react-icons/fi";
import Comments from "../Containers/Comments/CommentCreate";
import Replies from "../Containers/Replies/RepliesCreate";
import ModalPopUp from "../shareModal/modalShare";

import "./Pages.scss";

const Tags = ({ tags }) => {
  return (
    <div className="col">
      <small className="tag-pill">Music</small>
    </div>
  );
};
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shareOpen: "closeShare",
      isHidden: true,
      modalShow: false
    };

    this.shareOpenToggle = this.shareOpenToggle.bind(this);
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
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

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    const url = window.location.href;
    //URL patterns for Social media sites share functionalities
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    const twitterUrl = `https://twitter.com/home?status=${url}`;
    const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;
    return (
      <div className="dilemma-section">
        <div onClick={this.handleClose}>
          <div className="header">
            <h4> Question</h4>
            {/* <div className="titleIcons">
              <span className="fa fa-bookmark-o" />
              <span
                className="fa fa-share-alt "
                // style={{ position: "relative", left: "460px", bottom: "0px" }}
                // onClick={() => this.setState({ modalShow: true })}
                variant="light"
              >
                <ModalPopUp show={this.state.modalShow} onHide={modalClose} />
              </span>
            </div> */}
          </div>

          <div className=" m-2">
            <p>
              Steven had been in a relationship with Emily for two years when he
              cheated on her with Stephanie. Although Steven was the one in a
              relationship, Stephanie knew that he was taken and yet pursued
              Steven and then slept with him anyway. Who’s more in the wrong?
            </p>
            <div className="row">
              <Tags />
              <div className="col text-right">
                <span className="text-muted">
                  <small>
                    <FiEye />
                    10 Views
                  </small>
                </span>
                <span className="ml-3 text-muted">
                  <small>
                    <Moment fromNow ago>
                      2019-05-23T15:48:50.789929
                    </Moment>
                  </small>
                </span>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <small className="card-reply">
                  <span className="reply-icon">
                    <FiMessageCircle /> Replies
                  </span>
                  <span className="reply-counter">12</span>
                </small>
                <small className="card-follow">
                  <span className="follow-icon">
                    <FiRss /> Follow
                  </span>
                  <span className="follow-counter">2300</span>
                </small>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Comments />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
