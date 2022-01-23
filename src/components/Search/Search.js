import React, { useContext } from "react";
import { SearchContext } from "../../App";
import "./Search.css";
import Data from "../../data.json";
import { Link } from "react-router-dom";

const Search = () => {
  const searchValue = useContext(SearchContext);
  const category = searchValue.select.houseType;
  const price = searchValue.select.price;
  const city = searchValue.select.location;

  // console.log(category, price, city);
  const posts = Data.filter(
    (post, key) =>
      post.category.toLowerCase() === category.toLowerCase() &&
      parseInt(post.price) === parseInt(price) &&
      post.city.toLowerCase() === city.toLowerCase()
  );

  // console.log(posts);
  // console.log(searchValue);
  return (
    <>
      <div className="search-container container">
        <h3>Found {posts.length} results</h3>
        <div className="search-header">
          {posts.map((post, id) => {
            return (
              <div key={post.id} className="search-section">
                <img src={post.image} alt={post.title} />
                <div className="search-desc">
                  <h1>{post.title}</h1>
                  <p>{post.description}</p>
                  <h4>&#8358;{post.price}</h4>
                  <p>
                    {post.city}, {post.country}
                  </p>
                  <Link to={`../houses/${post.id}`} className="primary">
                    Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Search;
