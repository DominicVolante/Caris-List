import React from "react";
import tuckLogo from "../images/tuckLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  console.log(tuckLogo);
  return (
    <header className="header">
        <div className="header_flex ">
          <Link
            to={{
              pathname: `/home`,
            }}
          >
            <img className="headerimg" src={tuckLogo} alt="logo" />
          </Link>
        </div>
        <div className="headerBar"></div>
      
    </header>
  );
};

export default Header;
