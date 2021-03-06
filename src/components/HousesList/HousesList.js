import React, { useState } from "react";
import Data from "../../data.json";
import "./HousesList.css";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";

function HousesList() {
  // eslint-disable-next-line
  const [posts, setPosts] = useState(Data);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <>
      <div className="container house-header">
        <h3>Our Houses</h3>
        <div className="search-field">
          <label htmlFor="search">Search By</label>
          <select defaultValue="default">
            <option value="price">Price</option>
            <option value="location">Location</option>
            <option value="houseType">House Type</option>
          </select>
          <input
            type="search"
            placeholder="Type something"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="houses-container container">
        {currentPost
          // eslint-disable-next-line
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.price.toString().includes(searchTerm.toString()) ||
              val.category.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((property, index) => {
            return (
              <div key={property.id} className="houses-section">
                <img src={property.image} alt={property.title} />
                <div className="houses-desc">
                  <h1>{property.title}</h1>
                  <p>{property.description}</p>
                  <h4>&#8358;{property.price}</h4>
                  <p>
                    {property.city}, {property.country}
                  </p>
                  <Link to={`${property.id}`} className="primary">
                    Details
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      )
    </>
  );
}

export default HousesList;
