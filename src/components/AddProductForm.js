import { React, Component } from "react";
import DefaultContext from "./context/DefaultContext";
import { withRouter } from "react-router-dom";

class AddProductForm extends Component {
  static contextType = DefaultContext;

  handleSubmit = (form) => {
    const f = new FormData(form);
    const data = {
      severity: f.get("severity"),
      name: f.get("name"),
      description: f.get("description"),
    };
    this.addProduct(data);
  };

  addProduct = (data) => {
    fetch(`${this.context.url}/products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => {
        this.context.updateStore();
        this.props.history.push("/home");
      })
      .catch((e) => {
        console.error(e);
        throw new Error("Error adding product");
      });
  };

  render() {
    return (
      <div className="add-symptom-form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.handleSubmit(e.target);
          }}
        >
          <h3>New Product</h3>
          <label htmlFor="severity">Product Severity</label>
          <select name="severity" id="severity" required>
            <option className="hidden" value="">
              product
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />
          <label htmlFor="name">Enter your product</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Fly-biting"
            required
          />
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" required></textarea>
          <button className="start-button" type="submit">
            Submit
          </button>
          <button
            className="start-button"
            type="reset"
            onClick={() => this.props.history.push("/home")}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(AddProductForm);
