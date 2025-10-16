import React from "react";
import "./number.css";

const Number = () => {
  return (
    <div className="number">
      <div className="singlenumber">
        <h2>100%</h2>
        <span>On-Time Deliveries</span>
      </div>
      <div className="singlenumber">
        <h2>420</h2>
        <span>Drop-offs</span>
      </div>
      <div className="singlenumber">
        <h2>98</h2>
        <span>Cross-Border Services</span>
      </div>
      <div className="singlenumber">
        <h2>120</h2>
        <span>Happy Customers</span>
      </div>
    </div>
  );
};

export default Number;
