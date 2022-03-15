import React from "react";
import "./Video.css";
import VideoPlayer from "react-video-js-player";
import Src from "./video.mp4";
import Src1 from "./video1.mp4";
import Src2 from "./video2.mp4";
import Src3 from "./video3.mp4";
import poster from "../../images/unsplash_bfOQSDwEFg4.png";
import poster1 from "../../images/unsplash_Id7u0EkTjBE.png";
import poster2 from "../../images/unsplash_CLKGGwIBTaY.png";
import poster3 from "../../images/unsplash_JvQ0Q5IkeMM.png";

function Video() {
  const videoSrc = Src;
  return (
    <section className="video-section">
      <div className="container">
        <article className="heading">
          <div className="text">
            <h3>Get Inspired</h3>
            <article>
              <p>
                We always give the best services to customers willing to buy
                properties and investors willing to list out their properties.
              </p>
              <button className="primary">View all</button>
            </article>
          </div>
          <div className="video">
            <VideoPlayer
              src={videoSrc}
              width="500"
              height="300"
              controls={true}
              poster={poster3}
            />
          </div>
        </article>
        <hr />
        <div>
          <article className="more-videos-heading">
            <p>More Videos &gt;&gt;&gt;</p>
            <div className="more-videos-video">
              <div className="video" id="video-player-1647271082351">
                <VideoPlayer
                  src={Src1}
                  width="500"
                  height="300"
                  controls={true}
                  poster={poster1}
                />
              </div>
              <div className="video">
                <VideoPlayer
                  src={Src2}
                  width="500"
                  height="300"
                  controls={true}
                  poster={poster2}
                />
              </div>
              <div className="video">
                <VideoPlayer
                  src={Src3}
                  width="300"
                  height="300"
                  controls={true}
                  poster={poster}
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Video;
