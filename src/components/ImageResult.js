import React, { Component } from "react";
import PixabayService from "../services/pixabay-service";
import { Lightbox } from "react-modal-image";
const loadingHolder = require('../assets/images/loading-holder.png');
const pixabayService = new PixabayService();

export default class ImageResult extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentModelImage: "",
      imageModelIsOpen: false
    }
  }

  async search() {
    const searchTerm = this.props.searchTerm;

    const images_data = await pixabayService.getSearchResult(searchTerm, "images", 1);

    this.setState({ images_data: images_data.hits });

  }

  imageModalOpen = (imageUrl) => {
    this.setState({
      currentModelImage: imageUrl,
      imageModelIsOpen: true
    });
  }

  toggleImageModal = () => {
    this.setState({
      currentModelImage: "",
      imageModelIsOpen: false
    });
  }

  componentWillMount() {
    this.search();
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchTerm !== prevProps.searchTerm) {
      this.search();
    }
  }

  render() {

    return (
      <div>
        {this.state.images_data && (this.state.images_data.map((item, key) => {
          return <div key={key} className="col-xs-12 col-sm-6 col-md-4">
            <div
              className="image-result-container"
            >
              <a
                className="preview"
                style={this.generateBgImage(item.webformatURL)}
                onClick={(e) => this.imageModalOpen(item.webformatURL)}
              >
                <div className="download">
                  <i className="fa fa-download"></i>
                  <span>{item.downloads}</span>
                </div>
              </a>
              <div className="author-area">
                <div className="media">
                  <div className="media-left">
                    <a target="_blank" href={item.pageURL}>
                      <img
                        className="media-object"
                        alt={item.user}
                        src={item.userImageURL === "" ? loadingHolder : item.userImageURL}
                        width="36"
                        height="36"
                      />
                    </a>
                  </div>
                  <div className="media-body">
                    <a target="_blank" href={item.pageURL}>
                      <h4 className="media-heading">
                        {item.user}
                      </h4>
                    </a>
                    <p className="tag" title={item.tags}>
                      <i className="fa fa-tags"></i>{" "}
                      <span>{item.tags}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }))}
        {
          this.state.imageModelIsOpen && (
            <Lightbox
              medium={this.state.currentModelImage}
              onClose={this.toggleImageModal}
            />
          )
        }

      </div>

    );
  }

  generateBgImage = (imageUrl) => {
    return { "backgroundImage": "url(" + imageUrl + ")" }
  }

  generateCaption = (item) => {
    return "<div><img src={item.userImageURL} width='48' height='48' /><br /><b>{item.user}</b><br /><i class='fa fa-tags'></i> {item.tags}</div>"
  }

}
