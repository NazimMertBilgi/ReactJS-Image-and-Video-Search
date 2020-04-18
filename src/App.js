import React, { Component } from "react";
import Header from "./components/Header";
// Bootstrap
import "./assets/lib/bootstrap/dist/css/bootstrap.min.css";
// Font Awesome
import "./assets/lib/font-awesome/css/font-awesome.min.css";
// Custom Css
import "./assets/css/style.css";
import SearchResult from "./components/SearchResult";
import Footer from "./components/Footer";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "",
      searchType: "",
    };
  }

  searchClick = (searchTerm) => {
    this.setState({ searchTerm: searchTerm });
  };

  searchTypeChanged = (value) => {
    this.setState({ searchType: value });
  };

  render() {
    return (
      <div>
        <Header
          searchTypeChanged={(searchType) => this.searchTypeChanged(searchType)}
          searchClick={(searchTerm) => this.searchClick(searchTerm)}
        />

        <SearchResult
          searchType={this.state.searchType}
          searchTerm={this.state.searchTerm}
        />

        <Footer />
      </div>
    );
  }
}
