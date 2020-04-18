import React from "react";
import * as gitHubSticker from '../assets/images/fork-me-on-github-sticker.png';

function ForkGithub() {
  return (
    <div>
      <a
        href="https://github.com/NazimMertBilgi/ReactJS-Image-and-Video-Search"
        className="fork-me-on-github-sticker">
        <img
          src={gitHubSticker}
          alt="Fork me on GitHub"
        />
      </a>
    </div>
  );
}

export default ForkGithub;
