import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper landing_bar">
        <div className="landing_left ">
          <h1>
            Dont know how to be "eco-friendly?" <br /> Check Cari's List.
          </h1>
          <h5></h5>
        </div>
      </div>
    );
  }
}

export default LandingPage;
