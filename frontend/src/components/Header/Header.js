import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="blog-header py-3">
    <div className="row flex-nowrap justify-content-between align-items-center">
      <div className="col-12 text-center">
        <Link className="blog-header-logo text-dark" to="/">
          Readable
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
