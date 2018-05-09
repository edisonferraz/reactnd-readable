import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  PostsPage,
  PostDetailPage,
  PostFormPage,
  NotFoundPage,
} from 'pages/posts';
import Header from 'components/Header';

const App = () => (
  <div className="container">
    <Header />
    <Switch>
      <Route path="/" exact component={PostsPage} />
      <Route path="/404" exact component={NotFoundPage} />
      <Route path="/:name" exact component={PostsPage} />
      <Route path="/posts/new" exact component={PostFormPage} />
      <Route path="/posts/edit/:id" exact component={PostFormPage} />
      <Route path="/:category/:id" exact component={PostDetailPage} />
      <Route component={PostsPage} />
    </Switch>
  </div>
);

export default App;
