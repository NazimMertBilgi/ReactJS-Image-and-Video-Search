import React, { Component } from "react";
import PixabayService from "../services/pixabay-service";
import VideoPlayer from "./VideoPlayer";
const loadingHolder = require('../assets/images/loading-holder.png');
const pixabayService = new PixabayService();

export default class VideoResult extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentModelVideo: "",
      videoModelIsOpen: false
    }
  }

  async search() {
    const searchTerm = this.props.searchTerm;

    const videos_data = await pixabayService.getSearchResult(searchTerm, "videos", 1);

    this.setState({ videos_data: videos_data.hits });

  }

  videoModalOpen = (videoUrl) => {
    this.setState({
      currentModelVideo: videoUrl,
      videoModelIsOpen: true
    });
  }

  toggleVideoModal = () => {
    this.setState({
      currentModelVideo: "",
      videoModelIsOpen: false
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
        {this.state.videos_data && (this.state.videos_data.map((item, key) => {
          return <div key={key} className="col-xs-12 col-sm-6 col-md-4">
            <div
              className="video-result-container"
            >
              <a
                className="preview"
                style={this.generateBgImageForVideo(item.picture_id)}
                onClick={(e) => this.videoModalOpen(item.videos.large.url)}
              >
                <div className="download">
                  <i className="fa fa-download"></i>
                  <span>{item.downloads}</span>
                </div>
                <div className="play-btn">
                  <i className="fa fa-play" aria-hidden="true"></i>
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

        <VideoPlayer url={this.state.currentModelVideo} open={this.state.videoModelIsOpen} toggleModal={this.toggleVideoModal} />

      </div>

    );
  }

  generateBgImageForVideo = (imageUrl) => {
    return { "backgroundImage": "url(https://i.vimeocdn.com/video/"+imageUrl+"_640x360.jpg)" }
  }


}
