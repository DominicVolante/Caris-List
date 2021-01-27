import React, { Component } from "react";
import Header from "./components/Header";
import HomeRoute from "./components/routes/HomeRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DefaultContext from "./components/context/DefaultContext";
import EditProductForm from "./components/EditProductForm";
import LandingPage from "./components/LandingPage";
import ExpandedProduct from "./components/ExpandedProduct";
import AddProductRoute from "./components/routes/AddProductRoute";

class App extends Component {
  static contextType = DefaultContext;

  state = {
    store: {
      products: [],
    },
    filteredProducts: [],
    url: this.context.url,
  };

  sortList = (sort) => {
    if (!sort) {
      return;
    }
    if (sort === "up") {
      let sorted = [...this.state.store.products];
      sorted.sort((a, b) => {
        return a.rating - b.rating;
      });
      this.setState({
        store: {
          products: sorted,
        },
      });
    }
    if (sort === "down") {
      let sorted = [...this.state.store.products];
      sorted.sort((a, b) => {
        return b.rating - a.rating;
      });
      this.setState({
        store: {
          products: sorted,
        },
      });
    }
  };

  filterList = (filter) => {
    let unFiltered = [...this.state.store.products];
    let filtered = [];

    if (!filter) {
      this.updateStore();
    }
    for (let i = 0; i < unFiltered.length; i++) {
      if (unFiltered[i].category.includes(filter)) {
        filtered.push(unFiltered[i]);
      }
      this.setState({
        store: {
          products: filtered,
        },
      });
    }
  };

  updateStore = () => {
    this.getProducts();
  };

  getProducts = () => {
    fetch(`${this.state.url}/products`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          store: {
            products: res,
          },
        });
      });
  };

  componentDidMount = () => {
    this.updateStore();
  };

  render() {
    const contextVal = {
      ...this.state,
      updateStore: this.updateStore,
    };

    return (
      <DefaultContext.Provider value={contextVal}>
        <div className="App">
          <Header />
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/home"
            render={() => (
              <HomeRoute
                store={this.state.store}
                sortList={this.sortList}
                filterList={this.filterList}
              />
            )}
          />
          <Route path="/home/addproduct" component={AddProductRoute} />
          <Route path="/home/edit/:id" component={EditProductForm} />
          <Route path="/home/details/:id" component={ExpandedProduct} />
        </div>
      </DefaultContext.Provider>
    );
  }
}

export default App;
