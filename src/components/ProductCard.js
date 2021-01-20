import React, { Component } from "react";
import DefaultContext from "./context/DefaultContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
  faExpandArrowsAlt,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";

class ProductCard extends Component {
  static contextType = DefaultContext;
  deleteProduct = () => {
    fetch(`${this.context.url}/products/${this.props.id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        this.context.updateStore();
      })
      .catch((e) => {
        throw new Error(`Error deleting: ${e.message}`);
      });
  };

  generateRating = (num) => {
    if (num === 1) {
      return (
        <p>
          <FontAwesomeIcon icon={faSeedling} size="2x" alt="1" />
        </p>
      );
    }
    if (num === 2) {
      return (
        <p>
          <FontAwesomeIcon icon={faSeedling} size="2x" alt="1" />{" "}
          <FontAwesomeIcon icon={faSeedling} size="2x" alt="1" />
        </p>
      );
    }
    if (num === 3) {
      return (
        <p>
          <FontAwesomeIcon icon={faSeedling} size="2x" alt="1" />{" "}
          <FontAwesomeIcon icon={faSeedling} size="2x" alt="1" />{" "}
          <FontAwesomeIcon icon={faSeedling} size="2x" alt="1" />
        </p>
      );
    }
  };

  render() {
    const { date, id, name, rating, synopsis, image } = this.props;
    const dateString = new Date(date).toLocaleDateString();
    return (
      <li className="product">
        <Link
          to={{
            pathname: `/home/details/${id}`,
          }}
        >
          <img className="landingimg" src={image} alt="logo" />
        </Link>
        <div className="productTitle">
          <Link
            to={{
              pathname: `/home/details/${id}`,
            }}
          >
            <h3>{name}</h3>
          </Link>

          {this.generateRating(rating)}
        </div>
      </li>
    );
  }
}

export default ProductCard;
