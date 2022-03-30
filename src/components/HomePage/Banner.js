import React from 'react'
import Slide from "react-reveal/Slide";
import "./Home.css";
function Banner() {
  return (
    <>
    <section className="hero-section">
          <Slide left cascade>
            <div className="text">
              <h1>
                Modern home <br />
                Your <span>best</span> home
              </h1>
              <p>Let's find a perfect home for you</p>
            </div>
          </Slide>
          <Slide right>
            <div className="image"></div>
          </Slide>
        </section>
    </>
  )
}

export default Banner