import React, { useState } from "react";
import "./Properties.css";
import Data from "../../data.json";
import { Link } from "react-router-dom";

const imgArr = Data.map((img) => img.image);
function Properties() {
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (imgArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (imgArr.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <div className="properties-wrapper">
      <div className="heading container">
        <div className="text">
          <h3>Recently Added Properties</h3>
          <p>You can also view the details of each property below</p>
        </div>
        <Link to="/houses">
          <button className="primary">View all</button>
        </Link>
      </div>
      <div className="property-container container">
        {Data.map((property, index) => {
          return (
            <div
              key={property.id}
              className="property-section"
              style={{ transform: `translateX(${x}%)` }}
            >
              <img src={property.image} alt={property.title} />
              <div className="desc">
                {/* <h1>{property.title}</h1> */}
                <h4>
                  {property.city}, {property.country}
                </h4>
                <p>{property.description}</p>
                <h4>&#8358;{property.price}</h4>
                <Link to={`/houses/${property.id}`} className="primary">
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="left" onClick={goLeft}></div>
      <div className="right" onClick={goRight}></div>
    </div>
  );
}

export default Properties;
