import React from "react";

const DefaultContext = React.createContext({
  updateStore: () => {},
  url: "http://localhost:8080",
  //url: "https://young-castle-86830.herokuapp.com",
});

export default DefaultContext;
