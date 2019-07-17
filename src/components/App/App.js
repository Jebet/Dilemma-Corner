import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../../components/Pages";
import CommentCreate from "../../Containers/Comments/CommentCreate";
import CommentList from "../../Containers/Comments/CommentList";
import CommentDelete from "../../Containers/Comments/CommentDelete";
import CommentShow from "../../Containers/Comments/CommentShow";
import CommentEdit from "../../Containers/Comments/CommentEdit";
import CommentReply from "../../Containers/Replies/RepliesCreate";
import "./App.css";

const App = () => {
  return (
    <div className="">
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
