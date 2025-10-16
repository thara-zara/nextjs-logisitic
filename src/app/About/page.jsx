import React from "react";
import "./about.css";
import Button from "@/components/Button/Button";
import Company from "@/components/Company/Company";
import { FaCheckCircle } from "react-icons/fa";

const page = () => {
  return (
    <div className="main-about">
      <div className="about">
        <div className="aboutinner">
          <div className="singleservice">
            <div className="sleft">
              <h3>Leading the future of logistics tech</h3>
              <p>
                Transforming the logistics technology environment with new
                solutions and forward-thinking strategies.
              </p>
              <Button />
            </div>
            <div className="sright">
              <img src="./images/banner2.jpg"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="mission">
        <div className="missioninner">
          <div className="mis">
            <div>
              <h2>Our Mission</h2>
              <p>
                Enabling seamless journeys with dependable transportation
                solutions, promoting community connectivity, and assuring
                passenger safety.
              </p>
            </div>
            <div className="second">
              <h2>Our Goals</h2>
              <p>
                Our mission is to deliver efficient and dependable
                transportation options that are tailored to our customers'
                specific needs.
              </p>
            </div>
            <div className="aboutlist">
              <div className="slist">
                <FaCheckCircle className="icn" />
                <p>Streamlining Transport Solutions.</p>
              </div>
              <div className="slist">
                <FaCheckCircle className="icn" />
                <p>Ensuring Timely Deliveries.</p>
              </div>
              <div className="slist">
                <FaCheckCircle className="icn" />
                <p>Tailored Transportation Services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-marq">
        <Company />
      </div>
    </div>
  );
};

export default page;
