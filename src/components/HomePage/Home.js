import React from "react";
import "./Home.css";
import TabNav from "./TabNav";

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="text">
          <h1>
            Modern home <br />
            Your <span>best</span> home
          </h1>
          <p>Let's find a perfect home for you</p>
        </div>
        <image className="image"></image>
      </section>
      <TabNav/>
      <article className="article">
        <div className="text">
          For over 10 years we have been helping <br />
          you find the best luxury property <br />at affordable prices.
        </div>
        <div className="figures">
          <span className="fig-subtitle">
          <p>10+</p> <br />
              <span>Years <br />Of experience</span>
          </span>
          <span className="fig-subtitle">
          <p>879</p> <br />
              <span>Rented <br />Apartments</span>
          </span>
          <span className="fig-subtitle">
          <p>20</p> <br />
              <span>Awards <br />Gained</span>
          </span>
        </div>
      </article>
    </>
  );
}

export default Home;
