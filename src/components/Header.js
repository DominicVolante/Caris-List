import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header_flex ">
        <h1>
          <Link
            to={{
              pathname: `/home`,
            }}
          >
            Cari's List
          </Link>
        </h1>
      </div>
      <div className="headerBar"></div>
    </header>
  );
};

export default Header;
