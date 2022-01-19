import React, { useState } from "react";
import Data from "../../data.json";
import "./HousesList.css";
import Pagination from "../Pagination/Pagination";

function HousesList() {
  const [posts] = useState(Data);
  const [currentPage, setCurrentPage] = useState(1);
  // const [loading, setLoading] = useState(false)
  const [postPerPage] = useState(6);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // if (loading) {
  //   return <h2>Loading.....</h2>
  // }
  return (
    <>
      <div className="container house-header">
        <h3>Our Houses</h3>
        <div className="search-field">
          <label htmlFor="search">Search By</label>
          <select defaultValue="default">
            <option value="price">Price</option>
            <option value="price">Location</option>
          </select>
          <input type="search" placeholder="Type something" />
          <button type="submit">Search</button>
        </div>
      </div>
      <div className="houses-container container">
        {currentPost.map((property, index) => {
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
                <button className="primary">Buy Now</button>
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
    </>
  );
}

export default HousesList;
