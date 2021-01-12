import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import doggo from "../images/doggo.png";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper landing_bar">
        <div className="landing_left ">
          <h1>
            Need to track symptoms? <br /> Just tuck them away.
          </h1>
          <h5>Keep track of the details to help guide you to wellness</h5>
        </div>
        <ul className="landing_right">
          <img className="landingimg" src={doggo} alt="logo" />
          <li>
            <FontAwesomeIcon icon={faCircleNotch} size="xs" alt="expand icon" />{" "}
            view by severity
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleNotch} size="xs" alt="expand icon" />{" "}
            sort by date
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleNotch} size="xs" alt="expand icon" />{" "}
            take control
          </li>
          <Link to={{ pathname: `/home` }}>
            <button className="start-button">Get Started</button>
          </Link>
        </ul>
      </div>
    );
  }
}

export default LandingPage;
