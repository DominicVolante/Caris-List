import React, { Component } from "react";
import DefaultContext from "./context/DefaultContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";

class ExpandedProduct extends Component {
  static contextType = DefaultContext;

  state = {
    product: {},
  };

  generateRating = (num) => {
    if (num === 1) {
      return (
        <p>
          <FontAwesomeIcon icon={faSeedling} size="1x" alt="1" />
        </p>
      );
    }
    if (num === 2) {
      return (
        <p>
          <FontAwesomeIcon icon={faSeedling} size="1x" alt="1" />{" "}
          <FontAwesomeIcon icon={faSeedling} size="1x" alt="1" />
        </p>
      );
    }
    if (num === 3) {
      return (
        <p>
          <FontAwesomeIcon icon={faSeedling} size="1x" alt="1" />{" "}
          <FontAwesomeIcon icon={faSeedling} size="1x" alt="1" />{" "}
          <FontAwesomeIcon icon={faSeedling} size="1x" alt="1" />
        </p>
      );
    }
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;
    fetch(`${this.context.url}/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          product: res,
        });
      });
  };

  render() {
    const {
      date,
      name,
      rating,
      synopsis,
      description,
      image,
      link,
      disposal,
    } = this.state.product;
    const dateString = new Date(date).toLocaleDateString();
    return (
      <div>
        <button
          className="symptom-button"
          type="reset"
          onClick={() => this.props.history.push("/home")}
        >
          <FontAwesomeIcon
            icon={faArrowAltCircleLeft}
            size="2x"
            alt="back icon"
          />
        </button>
        <div>
          <img className="landingimg" src={image} alt="logo" />
          <h4>{name}</h4>

          {this.generateRating(rating)}
          <a target="_blank" href={link}>
            Visit!
          </a>
          <p>{synopsis}</p>
          <h5>Description</h5>
          <p>{description}</p>
          <h5>Disposal</h5>
          <p>{disposal}</p>
        </div>
      </div>
    );
  }
}

export default ExpandedProduct;
