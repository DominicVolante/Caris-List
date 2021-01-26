import React from "react";
import ReactDom from "react-dom";
import ProductList from "../ProductList";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(
    <BrowserRouter>
      <ProductList />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
