import React, { Component } from "react";
import { DebounceInput } from 'react-debounce-input';
import { animateScroll as scroll } from 'react-scroll'

const pleaseTypeMin3CharsText = "Please type min. 3 chars for make search.";

class SearchFilter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      searchType: "images",
      searchInfoText: pleaseTypeMin3CharsText
    };
  }

  search = (value) => {
    this.setState({ searchTerm: value })
    // arama terimi 3 harfse, ya da büyükse.
    if (value.length >= 3) {
      // aramayı bir üst component'e ilet.
      this.props.searchClick(value);

      this.searchInfoTextProcess();
    }
    else {
      this.setState({ searchInfoText: pleaseTypeMin3CharsText })
    }
  }

  searchTypeChanged = (value) => {

    scroll.scrollToTop();
    this.setState({ searchType: value });

    // scroll'un yukarı doğru çıkmasını beklemek adına 1 saniye sonra üst component'e veri iletiyoruz.
    setTimeout(() => {
      this.searchInfoTextProcess();
      this.props.searchTypeChanged(value);
    }, 1000);

  }


  searchInfoTextProcess = () => {
    if (this.state.searchTerm.length >= 3) {
      const searchInfoText = `<b>${this.state.searchTerm}</b> ${this.state.searchType.replace("s", "")} results.`
      this.setState({ searchInfoText });
    }
    else {
      this.setState({ searchInfoText: pleaseTypeMin3CharsText });
    }
  }


  render() {
    return (
      <div className="search-filter-area">
        <div className="container">
          <h1 id="h1Title">
            The picture and video you're looking for is in seconds.
          </h1>
          <div className="input-group">

            <DebounceInput
              minLength={3}
              debounceTimeout={300}
              className="form-control search-input"
              placeholder="Search for..."
              onChange={(e) => this.search(e.target.value)}
            />

            <span className="input-group-btn">
              <select
                onChange={(e) => this.searchTypeChanged(e.target.value)}
                className="form-control search-type"
              >
                <option value="images">Images</option>
                <option value="videos">Videos</option>
              </select>
              <button
                className="btn btn-default"
                type="button"
                onClick={(e) => this.search(this.state.searchTerm)}
              >
                SEARCH
              </button>
            </span>
          </div>
          <div className="info-area" dangerouslySetInnerHTML={{ __html: this.state.searchInfoText }}></div>
        </div>
      </div>
    );
  }
}


export default SearchFilter;
