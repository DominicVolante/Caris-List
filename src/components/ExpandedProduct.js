import React, { Component } from "react";
import DefaultContext from "./context/DefaultContext";
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
          <h5>{name}</h5>

          {this.generateRating(rating)}
          <p>{synopsis}</p>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default ExpandedProduct;
