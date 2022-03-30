import React from 'react'
import "./About.css"

function Stats() {
  return (
    <>
    <div className="stats-container">
      <div className="stats-wrapper">
        <div>
          <h1 className="stats-figure">250+</h1>
          <h3 className="stats-header">Completed Projects</h3>
        </div>
        <div>
          <h1 className="stats-figure">879+</h1>
          <h3 className="stats-header">Apartment Sales</h3>
        </div>
        <div>
          <h1 className="stats-figure">400+</h1>
          <h3 className="stats-header">Happy Clients</h3>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Stats