import { React, Component } from "react";
import DefaultContext from "./context/DefaultContext";
import { withRouter } from "react-router-dom";

class AddProductForm extends Component {
  static contextType = DefaultContext;

  handleSubmit = (form) => {
    const f = new FormData(form);
    const data = {
      name: f.get("name"),
      rating: f.get("rating"),
      synopsis: f.get("synopsis"),
      description: f.get("description"),
      disposal: f.get("disposal"),
      link: f.get("url"),
      image: f.get("imgurl"),
      category: f.get("category"),
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
          <label htmlFor="rating">Product rating</label>
          <select name="rating" id="rating" required>
            <option className="hidden" value="">
              Rating
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <br />
          <label htmlFor="name">Enter your product</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Title"
            required
          />
          <label htmlFor="synopsis">Synopsis</label>
          <textarea
            name="synopsis"
            id="synopsis"
            placeholder="A short description of the product"
            required
          ></textarea>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="An in-depth description of the product"
            required
          ></textarea>
          <label htmlFor="disposal">Disposal</label>
          <textarea
            name="disposal"
            id="disposal"
            placeholder="How do you dispose of the product or its packaging?"
            required
          ></textarea>

          <label htmlFor="url">Paste the URL of the product's website.</label>
          <input
            type="text"
            name="url"
            id="url"
            placeholder="Product Website"
            required
          />

          <label htmlFor="imgurl">Paste the URL of the product's image.</label>
          <input
            type="text"
            name="imgurl"
            id="imgurl"
            placeholder="Image URL"
            required
          />

          <label htmlFor="category">Category</label>
          <select name="category" id="category" required>
            <option className="hidden" value="">
              Category
            </option>
            <option value="all">All</option>
            <option value="kitchen">Kitchen</option>
            <option value="bath">Bath</option>
            <option value="services">Services</option>
          </select>
          <br />

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
