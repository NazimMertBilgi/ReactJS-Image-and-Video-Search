import React, { Component } from "react";
import ForkGithub from "./ForkGithub";
import SearchFilter from "./SearchFilter";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  search = (searchTerm) => {
    // aramayı bir üst component'e ilet.
    this.props.searchClick(searchTerm);
  };

  searchTypeChanged = (value) => {
    this.props.searchTypeChanged(value);
  };

  render() {
    return (
      <div>
        <ForkGithub />
        <SearchFilter
          searchTypeChanged={(searchType) => this.searchTypeChanged(searchType)}
          searchClick={(searchTerm) => this.search(searchTerm)}
        />
      </div>
    );
  }
}
