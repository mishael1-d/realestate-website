import React from "react";
import "./TabNav.css"


function TabNav() {
  return (
    <>
      <div className="tab-container">
        <div className="tab-button">
          <button className="primary">Buy</button>
          <button className="secondary">Sell</button>
        </div>
        <div className="input-field">
          <label htmlFor="location">Location:</label>
          <select name="" id="">
            <option value="nigeria">Abuja</option>
            <option value="nigeria">Minna</option>
            <option value="nigeria">Lagos</option>
            <option value="nigeria">Ibadan</option>
            <option value="nigeria">Owerri</option>
            <option value="nigeria">Sokoto</option>
          </select>
          <label htmlFor="house-type">House Type:</label>
          <select name="" id="">
            <option value="nigeria">3-bedroom</option>
            <option value="nigeria">5-bedroom</option>
            <option value="nigeria">Duplex</option>
            <option value="nigeria">Bungalow</option>
            <option value="nigeria">Self-contain</option>
            <option value="nigeria">2-rooms self contain</option>
          </select>
          <label htmlFor="price">Price:</label>
          <select name="" id="">
            <option value="nigeria">$10000</option>
            <option value="nigeria">$20000</option>
            <option value="nigeria">$30000</option>
            <option value="nigeria">$40000</option>
            <option value="nigeria">$50000</option>
            <option value="nigeria">$60000</option>
          </select>
          <button type="submit" className="primary">Search</button>
        </div>
      </div>
    </>
  )
}

export default TabNav;
