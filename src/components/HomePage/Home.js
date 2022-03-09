import React from "react";
import Slide from "react-reveal/Slide";
import "./Home.css";
import About from "../AboutPage/About";
import Video from "../VideoSection/Video";
import Properties from "../Properties/Properties";
import Contact from "../ContactPage/Contact";
import Footer from "../Footer/Footer";
import TabNav from "./TabNav";

function Home() {
  return (
    <>
      <div className=" container">
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
        <TabNav />
        <Slide buttom>

        <article className="article">
          <div className="text">
            For over 10 years we have been helping <br />
            you find the best luxury property <br />
            at affordable prices.
          </div>
          <div className="figures">
            <span className="fig-subtitle">
              <p>10+</p> <br />
              <span>
                Years <br />
                Of experience
              </span>
            </span>
            <span className="fig-subtitle">
              <p>879</p> <br />
              <span>
                Rented <br />
                Apartments
              </span>
            </span>
            <span className="fig-subtitle">
              <p>20</p> <br />
              <span>
                Awards <br />
                Gained
              </span>
            </span>
          </div>
        </article>
        </Slide>
        <Slide left>
          <About />
        </Slide>
      </div>
      <Slide right>
        <Video />
      </Slide>
      <Slide left>
        <Properties />
      </Slide>
      <Slide right>
        <Contact />
      </Slide>
      <Footer />
    </>
  );
}

export default Home;
