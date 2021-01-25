import React, { Component } from "react";
import DefaultContext from "./context/DefaultContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { Tabs } from "./Tabs";

class ExpandedProduct extends Component {
  static contextType = DefaultContext;

  state = {
    product: {},
  };

  generateRating = (num) => {
    if (num === 1) {
      return (
        <p className="rating">
          <FontAwesomeIcon icon={faSeedling} size="1x" alt="1" />
        </p>
      );
    }
    if (num === 2) {
      return (
        <p className="rating">
          <FontAwesomeIcon icon={faSeedling} size="1x" alt="1" />{" "}
          <FontAwesomeIcon icon={faSeedling} size="1x" alt="1" />
        </p>
      );
    }
    if (num === 3) {
      return (
        <p className="rating">
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
          <div className="sectionrow">
            <img className="expandedImg main" src={image} alt="logo" />
            <div className="sidebar">
              <h2>{name}</h2>

              {this.generateRating(rating)}
              <button className="form-button">
                <a target="_blank" href={link}>
                  Visit Their Store
                </a>
              </button>
              <p>{synopsis}</p>
            </div>
          </div>
          <Tabs initialTab="Description">
            <div label="Description">
              <h2>Description</h2>
              <p>{description}</p>
            </div>
            <div label="Disposal">
              <h2>Disposal</h2>
              <p>{disposal}</p>
            </div>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default ExpandedProduct;
