import React from "react";
import "./Stats.css";

function Stats() {
  return (
    <div className="stats-container">
      <div className="stats-wrapper">
        <div>
          <h3 className="stats-header">Property Listing</h3>
          <h1 className="stats-figure">9,705</h1>
        </div>
        <div>
          <h3 className="stats-header">Areas Covered</h3>
          <h1 className="stats-figure">384</h1>
        </div>
        <div>
          <h3 className="stats-header">Agents & Developers</h3>
          <h1 className="stats-figure">1,022</h1>
        </div>
      </div>
    </div>
  );
}

export default Stats;
