import React from "react";
import ReactDom from "react-dom";
import ProductCard from "../ProductCard";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(
    <BrowserRouter>
      <ProductCard />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
