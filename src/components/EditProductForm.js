import { React, Component } from "react";
import DefaultContext from "./context/DefaultContext";
//import { withRouter } from "react-router-dom";

class EditProductForm extends Component {
  static contextType = DefaultContext;

  state = {
    product: {},
  };

  handleSubmit = (form) => {
    const f = new FormData(form);
    const data = {
      severity: f.get("severity"),
      name: f.get("name"),
      description: f.get("description"),
    };
    this.editProduct(data);
  };

  editProduct = (data) => {
    fetch(`${this.context.url}/products/${this.props.match.params.id}`, {
      method: "PATCH",
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
        throw new Error("Error updating product");
      });
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
    return (
      <div className="register-form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.handleSubmit(e.target);
          }}
        >
          <h3>Edit Product</h3>
          <label htmlFor="severity">Product Severity</label>
          <select
            name="severity"
            id="severity"
            value={this.state.product.rating}
            onChange={(e) =>
              this.setState({
                product: { ...this.state.product, severity: e.target.value },
              })
            }
            required
          >
            <option className="hidden" value="">
              Severity
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />
          <label htmlFor="name">Edit Product</label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={this.state.product.name}
            required
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            defaultValue={this.state.product.description}
            required
          ></textarea>
          <button className="form-button" type="submit">
            Submit
          </button>
          <button
            className="form-button"
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
export default EditProductForm;
