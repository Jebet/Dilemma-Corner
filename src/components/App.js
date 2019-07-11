import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../Header";
import CommentCreate from "../Comments/CommentCreate";
import CommentList from "../Comments/CommentList";
import CommentDelete from "../Comments/CommentDelete";
import CommentShow from "../Comments/CommentShow";
import CommentEdit from "../Comments/CommentEdit";
import CommentReply from "../replies/RepliesCreate";
import "./App.css";

const App = () => {
  return (
    <div className="container" style={{ margin: "0 auto" }}>
      {/* (now incharge of our own history object) -
      using your own custome history file as opposed to the one automatically 
      created and userd by BrowserRouter - import history instead */}
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={CommentList} />
          <Route path="/comments/new" exact component={CommentCreate} />
          <Route path="/comments/edit" exact component={CommentEdit} />
          <Route path="/comments/delete" exact component={CommentDelete} />
          <Route path="/comments/show" exact component={CommentShow} />
          <Route path="/replies/new" exact component={CommentReply} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
