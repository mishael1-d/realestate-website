import React from "react";
import testimonies from "../../testimonies";

function Testimonies() {
  return (
    <div className="testimonial-container container">
      <header>
        <h3>What Our Customers Say</h3>
        <p>Our Customer's Feedback</p>
        <div></div>
      </header>
      <section>
        {testimonies.map((testimony) => {
          return (
            <article className="customer-info" key={testimony.id}>
              <div className="profile_picture">{testimony.imageUrl}</div>
              <div className="profile-details">
                <p>{testimony.name}</p>
                <p>{testimony.country}</p>
              </div>
            </article>
          );
        })}
        {testimonies.map((testimony) => {
          return (
            <article className="customer-testimony" key={testimony.id}>
              <p className="caption"></p>
              <p className="rating">{testimony.starRating}</p>
              <p className="testimony">{testimony.testimony}</p>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default Testimonies;
