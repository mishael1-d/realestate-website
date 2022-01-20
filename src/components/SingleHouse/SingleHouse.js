import React from "react";
import { useParams } from "react-router-dom";
import Data from "../../data.json";
import "./SingleHouse.css";

function SingleHouse() {
  const { id } = useParams();

  // function getUnique(arr, comp) {
  //   const unique = arr
  //     //store and copmare the values in array
  //     .map((e) => e[comp])
  //     //store the keys of the unique objects
  //     .map((e, i, final) => final.indexOf(e) === i && i)
  //     //eliminate the dead keys and store the unique keys
  //     .filter((e) => arr[e])
  //     .map((e) => arr[e]);
  //   return unique;
  // }
  // const uniqueId = getUnique(Data, "id");
  // const propertyId = Array.from(new Set(Data.map((itemId) => itemId.id)));
  const filterData = Data.filter((item) => item.id === parseInt(id));
  console.log(filterData);
  // console.log(propertyId);
  // console.log(propertyId[0] === id);
  return (
    <div className="singlehouse-section">
      {/* {uniqueId.map((item=> {
return <h2>{item.title}</h2>
      }))} */}
      {filterData.map((house) => {
        return (
          <div key={house.id} className="details-section container">
            <div className="image-section">
              <img src={house.image} alt={house.description} />
            </div>
            <div className="rooms">
              <div className="room room1">Image of kitchen</div>
              <div className="room romm2">Image of living room</div>
            </div>
            <div className="desc-section">
              <h2>{house.title}</h2>
              <p><span>Type of Apartment:</span> {house.category}</p>
              <p><span>Description:</span> {house.description}</p>
              <p>
                <span>Location:</span> {house.city}, {house.country}
              </p>
              <p><span>Price:</span> &#8358;{house.price}</p>
              <button className="primary">Buy Now</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SingleHouse;
