import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { PostsPage, PostDetailPage, PostFormPage } from 'pages/posts';
import Header from 'components/Header';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={PostsPage} />
          <Route path="/categories/:name" exact component={PostsPage} />
          <Route path="/posts/new" exact component={PostFormPage} />
          <Route path="/posts/edit/:id" exact component={PostFormPage} />
          <Route path="/posts/:id" exact component={PostDetailPage} />
          <Route component={PostsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
