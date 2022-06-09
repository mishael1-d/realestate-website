import React, { useContext } from "react";
import "./TabNav.css";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";

function TabNav() {
  const value = useContext(AppContext);
  let navigate = useNavigate();
  const onSubmit = () => {
    navigate("search", { replace: true });
    value.setSelect(value.select);
  };
  return (
    <>
      <div className="tab-container">
        <div className="tab-button">
          <button
            className={value.active ? "primary" : "secondary"}
            onClick={() => value.setActive(true)}
          >
            Buy
          </button>
          <button
            className={!value.active ? "primary" : "secondary"}
            onClick={() => value.setActive(false)}
          >
            Rent
          </button>
        </div>
        <div className="input-field">
          <label htmlFor="location">Location:</label>
          <select
            name="location"
            value={value.select.location}
            onChange={value.onSelectChange}
          >
            {value.uniqueCity.map((item) => (
              <option key={item.id} value={item.city}>
                {item.city}
              </option>
            ))}
          </select>
          <label htmlFor="house-type">House Type:</label>
          <select
            name="houseType"
            value={value.select.houseType}
            onChange={value.onSelectChange}
          >
            {value.uniqueCategory.map((item) => (
              <option key={item.id} value={item.category}>
                {item.category}
              </option>
            ))}
          </select>
          <label htmlFor="price">Price:</label>
          <select
            name="price"
            value={value.select.price}
            onChange={value.onSelectChange}
          >
            {value.uniquePrice.map((item) => (
              <option key={item.id} value={item.price}>
                &#8358;{item.price}
              </option>
            ))}
          </select>
          <button type="submit" className="primary" onClick={onSubmit}>
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default TabNav;
