import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="jumbotron mt-3">
    <h1>404</h1>
    <p>{`Can't find this post anymore, sorry!`}</p>
    <Link to="/" className="btn btn-primary btn-smmt-5">
      back to Home
    </Link>
  </div>
);

export default NotFoundPage;
