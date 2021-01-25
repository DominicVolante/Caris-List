import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import MyCarousel from "./MyCarousel";
import imageOne from "../images/mohonk1.png";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper landing_bar">
        <div className="landing_left ">
          <h1>
            Dont know how to be "eco-friendly?" <br /> Check Cari's List.
          </h1>
          <h2>
            {" "}
            Cari's list is a place where you can find eco-friendly <br />{" "}
            options for the common things you use.{" "}
          </h2>
        </div>
        <div className="center">
          <Link to={{ pathname: `/home` }}>
            <button className="form-button center">Get Started!</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default LandingPage;
