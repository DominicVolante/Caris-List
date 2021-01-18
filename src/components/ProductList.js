import React, { Component } from "react";
import ProductCard from "./ProductCard";
import DefaultContext from "./context/DefaultContext";

class ProductList extends Component {
  static contextType = DefaultContext;

  generateProductList = () => {
    if (typeof this.props.store !== "object") return;

    return this.props.store.products.map((product) => {
      return (
        <ProductCard
          key={product.id}
          id={product.id}
          date={product.date}
          name={product.name}
          rating={product.rating}
          synopsis={product.synopsis}
          description={product.description}
          disposal={product.disposal}
          link={product.link}
          image={product.image}
          category={product.category}
          store={this.props.store}
        />
      );
    });
  };

  render() {
    return (
      <section className="log main">
        <ul className="list">{this.generateProductList()}</ul>
      </section>
    );
  }
}

export default ProductList;
