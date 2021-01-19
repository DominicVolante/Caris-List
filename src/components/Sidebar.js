import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AddProductForm from "./AddProductForm";

class Sidebar extends Component {
  state = {};

  render() {
    return (
      <div className="sidebar">
        <div>
          <label htmlFor="organize">Sort </label>
          <select
            name="organize"
            id="organize"
            onChange={(e) => {
              this.props.sortList(e.target.value);
            }}
          >
            <option className="hidden">Sort</option>
            <option value="up">Leaves +</option>
            <option value="down">Leaves -</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Sidebar;
