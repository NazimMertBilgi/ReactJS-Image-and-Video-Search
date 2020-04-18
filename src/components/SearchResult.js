import React, { Component } from "react";
import ImageResult from "./ImageResult";
import VideoResult from "./VideoResult";

export default class SearchResult extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    const searchType = this.props.searchType === "" ? "images" : this.props.searchType;
    const searchTerm = this.props.searchTerm;

    const validate = searchType !== "" && searchTerm !== "";

    return (
      <div className="container search-result-container">
        <div className="row clearfix ">
          {validate &&
            <div>
              {searchType === "images" ? (
                <ImageResult searchTerm={searchTerm} />
              ) : (
                  <VideoResult searchTerm={searchTerm} />
                )}
            </div>}

        </div>
      </div>
    );
  }
}
