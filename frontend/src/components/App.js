import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { PostsPage, PostDetailPage, PostFormPage } from 'pages/posts';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              {/*<a className="text-muted" href="#">
                Subscribe
    </a>*/}
            </div>
            <div className="col-4 text-center">
              <a className="blog-header-logo text-dark" href="#">
                Readable
              </a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="text-muted" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mx-3"
                >
                  <circle cx="10.5" cy="10.5" r="7.5" />
                  <line x1="21" y1="21" x2="15.8" y2="15.8" />
                </svg>
              </a>
              <a className="btn btn-sm btn-outline-secondary" href="#">
                Sign up
              </a>
            </div>
          </div>
        </header>

        <Router>
          <Switch>
            <Route path="/" exact component={PostsPage} />
            <Route path="/categories/:name" exact component={PostsPage} />
            <Route path="/posts/new" exact component={PostFormPage} />
            <Route path="/posts/edit/:id" exact component={PostFormPage} />
            <Route path="/posts/:id" exact component={PostDetailPage} />
            <Route component={PostsPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
