import React from "react";
import "./Video.css";
import VideoPlayer from "react-video-js-player";
// import Poster from "../../images/pexels-stael-guimarães-3369586.jpg";
import Src from "./video.mp4";

function Video() {
  const videoSrc = Src;
  // const poster = Poster;
  return (
    <section className="video-section">
      <div className="container">
        <article className="heading">
          <h3>Get Inspired</h3>
          <article>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              eligendi atque veritatis debitis, nihil officia molestias laborum
              eaque. Voluptatibus culpa pariatur quas. Sit, sint neque. Velit
              fuga fugiat necessitatibus et!
            </p>
            <button className="primary">View all</button>
          </article>
        </article>
        <div className="video">
          <VideoPlayer
            src={videoSrc}
            width="710"
            height="400"
            controls={true}
          />
        </div>
      </div>
    </section>
  );
}

export default Video;
