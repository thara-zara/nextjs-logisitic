import React from "react";
import "./company.css";
import Marquee from "react-fast-marquee";

const Company = () => {
  return (
    <div className="slider">
  <h2>Our Trusted Customers</h2>
        <Marquee autoFill={true} className="">
          <div style={{ display: "flex", gap: "50px" }}>
            <div className="opacity-[70%]">
              <img src={"/images/leaf.svg"} className="w-[150px] h-[100px]" />
            </div>
            <div className="opacity-[70%]">
              <img src={"/images/um.svg"} className="w-[150px] h-[100px]" />
            </div>
            <div className="opacity-[70%]">
              <img src={"/images/mind.svg"} className="w-[150px] h-[100px]" />
            </div>
            <div className="opacity-[70%]">
              <img src={"/images/green.svg"} className="w-[150px] h-[100px]" />
            </div>
            <div className="opacity-[70%]">
              <img src={"/images/colab.svg"} className="w-[150px] h-[100px]" />
            </div>
          </div>
        </Marquee>

    </div>
  );
};

export default Company;
