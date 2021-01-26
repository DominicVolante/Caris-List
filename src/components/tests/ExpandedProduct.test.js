import React from "react";
import ReactDom from "react-dom";
import ExpandedProduct from "../ExpandedProduct";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const match = { params: { id: 1 } };
  ReactDom.render(
    <BrowserRouter>
      <ExpandedProduct match={match} />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
