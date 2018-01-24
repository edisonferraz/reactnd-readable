import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Posts, PostForm } from './posts';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Posts} />
        <Route path="/categories/:name" exact component={Posts} />
        <Route path="/posts/new" exact component={PostForm} />
        <Route path="/posts/edit/:id" exact component={PostForm} />
        <Route path="/posts/:id" exact component={PostForm} />
        <Route component={Posts} />
      </Switch>
    </BrowserRouter>
  );
};
