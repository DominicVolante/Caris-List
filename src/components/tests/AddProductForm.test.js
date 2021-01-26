import React from "react";
import ReactDom from "react-dom";
import AddProductForm from "../AddProductForm";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(
    <BrowserRouter>
      <AddProductForm />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
