import React, { Component } from "react";
import DefaultContext from "./context/DefaultContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

class ExpandedProduct extends Component {
  static contextType = DefaultContext;

  state = {
    product: {},
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
    const { date, name, severity, description } = this.state.product;
    const dateString = new Date(date).toLocaleDateString();
    return (
      <div>
        <div className="expanded-item">
          <h4>{dateString}</h4>
          <h5>{name}</h5>
          <p>Severity: {severity}</p>
          <p>Description: {description}</p>
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
        </div>
      </div>
    );
  }
}

export default ExpandedProduct;
