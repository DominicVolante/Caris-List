import React, { Component } from "react";
import ProductList from "../ProductList";
import Sidebar from "../Sidebar";
//import dummyData from '../../dummyData';

class HomeRoute extends Component {
  render() {
    return (
      <div className="sectionrow">
        <ProductList store={this.props.store} />
      </div>
    );
  }
}

export default HomeRoute;
