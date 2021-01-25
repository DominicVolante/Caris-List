import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="wrapper landing_bar">
          <div className="landing_left ">
            <h1>
              Struggling to be "eco-friendly?" <br /> Check Cari's List.
            </h1>
            <h2>
              {" "}
              Cari's list is a place where you can find eco-friendly <br />{" "}
              options for the common things you use.{" "}
            </h2>
          </div>
          <ul className="landing_right">
            <h3>Everything on Cari's List is eco-friendly.</h3>
            <li>
              Eco-friendly:{" "}
              <FontAwesomeIcon icon={faSeedling} size="1x" alt="1" />
            </li>
            <li>
              Very eco-friendly:{" "}
              <FontAwesomeIcon icon={faSeedling} size="1x" alt="1" />{" "}
              <FontAwesomeIcon icon={faSeedling} size="1x" alt="1" />
            </li>
            <li>
              Zero waste:{" "}
              <FontAwesomeIcon icon={faSeedling} size="1x" alt="1" />{" "}
              <FontAwesomeIcon icon={faSeedling} size="1x" alt="1" />{" "}
              <FontAwesomeIcon icon={faSeedling} size="1x" alt="1" />
            </li>
            <Link to={{ pathname: `/home` }}>
              <button className="form-button center">Get Started!</button>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default LandingPage;
