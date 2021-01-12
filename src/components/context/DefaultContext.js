import React from "react";

const DefaultContext = React.createContext({
  updateStore: () => {},
  url: "http://localhost:8080",
  //url: "",
});

export default DefaultContext;
