import React from "react";
import "./About.css"
import src from "../../images/Group495.png"

function AboutUs() {
  return (
    <>
      <div className="container about_us">
        <div className="about_us_text">
            <p className="title">ABOUT US</p>
            <h3 className="heading">Real . Estate Family</h3>
            <p className="paragraph">
                Real . Estate is a suitable platform when it comes to buying and selling of properties across the whole of Nigeria, as there's no need for fear because you are in safe hands as every detail undergo special consideration an attention. We have the best qualified agents to help take charge of your properties.
            </p>
            <button className="primary">Explore</button>
        </div>
        <div className="about_us_image">
            <img src={src} alt="" srcset="" />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
