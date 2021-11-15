import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import NewPost from "./components/NewPost";
import Post from "./components/Post";

const Routes = () => {
  return (
    <Switch>
      <Route path="/new" exact>
        <NewPost />
      </Route>
      <Route path="/" exact>
        <Homepage />
      </Route>
      <Route path="/:postId" exact>
        <Post />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
