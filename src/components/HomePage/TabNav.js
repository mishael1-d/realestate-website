import React, { useState } from "react";
import "./TabNav.css";
import Data from "../../data.json";



//function for the search functionality
// function search(location, type, price) {}

//function to delete replicated data in object elements
function getUnique(arr, comp) {
  const unique = arr
  //store and copmare the values in array
  .map((e) => e[comp])
  //store the keys of the unique objects
  .map((e, i, final) => final.indexOf(e) === i && i)
  //eliminate the dead keys and store the unique keys
  .filter((e) => arr[e])
  .map((e) => arr[e]);
  return unique;
}
//function to deisplay cities after deleting duplicate data
const uniqueCity = getUnique(Data, "city")
//function to deisplay categories after deleting duplicate data
const uniqueCategory = getUnique(Data, "category")
//function to prices cities after deleting duplicate data
const uniquePrice = getUnique(Data, "price")


function TabNav() {
  const [active, setActive] = useState(true);
  // const [option, setOption] = useState("")
  // const onOptionChange= (e)=>{
  //   e.preventDefault()
  //   setOption(e.target.value)
  // }
  return (
    <>
      <div className="tab-container">
        <div className="tab-button">
          <button className= {active ? "primary":"secondary"} onClick={()=>setActive(true)}>Buy</button>
          <button className={!active ? "primary":"secondary"} onClick={()=>setActive(false)}>Rent</button>
        </div>
        <div className="input-field">
          <label htmlFor="location">Location:</label>
          <select name="" id="">
            {uniqueCity.map(item => (
              <option key={item.id} value={item.city}>
                {item.city}
              </option>
            ))}
          </select>
          <label htmlFor="house-type">House Type:</label>
          <select name="" id="">
            {uniqueCategory.map(item => (
              <option key={item.id} value={item.category}>
                {item.category}
              </option>
            ))}
          </select>
          <label htmlFor="price">Price:</label>
          <select name="" id="">
            {uniquePrice.map(item => (
              <option key={item.id} value={item.price}>
                &#8358;{item.price}
              </option>
            ))}
          </select>
          <button type="submit" className="primary">
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default TabNav;
