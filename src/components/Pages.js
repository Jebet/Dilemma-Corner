import React from "react";
import Moment from "react-moment";
import { FiMessageCircle, FiRss, FiEye, FiShare2 } from "react-icons/fi";
import Comments from "../Containers/Comments/CommentCreate";
// import Tags from "./tags/Tags";
// import ShareCard from "../shareModal/modalShare";

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
      toggleButtonText: "  Share",
      modalShow: false
    };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div className="dilemma-section">
        <div onClick={this.handleClose}>
          <div className="header">
            <h4>
              Question
              {/* <span onClick={() => this.setState({ modalShow: true })}> */}
              {/* </span> */}
              {/* <ShareCard show={this.state.modalShow} onHide={modalClose} /> */}
            </h4>
            <FiShare2 className="shareTop" />
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
