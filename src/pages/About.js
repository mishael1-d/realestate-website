import React from "react";
import AboutUs from "../components/AboutPage/AboutUs";
import Stats from "../components/AboutPage/Stats";
import Footer from "../components/Footer/Footer";
import Banner from "../components/HomePage/Banner";
import TabNav from "../components/HomePage/TabNav";
// import Properties from "../components/Properties/Properties";

function About() {
  return (
    <>
      <div className="container">
        <Banner />
        <TabNav />
        <AboutUs />
        <Stats />
        {/* <Properties /> */}
      </div>
        <Footer />
    </>
  );
}

export default About;
