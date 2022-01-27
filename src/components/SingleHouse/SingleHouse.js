import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SearchContext } from "../../App";
import Data from "../../data.json";
import "./SingleHouse.css";

function SingleHouse() {
  const value = useContext(SearchContext);
  const { id } = useParams();
  const [house, setHouse] = useState([]);
  useEffect(() => {
    const filterData = Data.filter((item) => item.id === parseInt(id));
    console.log(filterData);
    setHouse(filterData);
  }, [id]);
  let navigate = useNavigate();
  const onSubmit = () => {
    if (value.isLoggedIn) {
      navigate("../payment", { replace: true });
    } else {
      navigate("../register", { replace: true });
    }
  };
  return (
    <div className="singlehouse-section">
      {house.map((house) => {
        return (
          <div key={house.id} className="details-section container">
            <div className="image-section">
              <img src={house.image} alt={house.description} />
            </div>
            <div className="rooms">
              <div className="room room1">
                <img src={house.kitchen} alt="kitchen" />
                <p>Image of Kitchen</p>
                </div>
              <div className="room romm2">
                <img src={house.livingRoom} alt="living room" />
                <p>Image of Living Room</p>
                </div>
            </div>
            <div className="desc-section">
              <h2>{house.title}</h2>
              <p>
                <span>Type of Apartment:</span> {house.category}
              </p>
              <p>
                <span>Description:</span> {house.description}
              </p>
              <p>
                <span>Location:</span> {house.city}, {house.country}
              </p>
              <p>
                <span>Price:</span> &#8358;{house.price}
              </p>
              <button className="primary" onClick={onSubmit}>
                Buy Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SingleHouse;
