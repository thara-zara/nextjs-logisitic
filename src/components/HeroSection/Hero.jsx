import React from "react";
import "./hero.css";
import Button from "../Button/Button";
import { FaLocationDot } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiShipLine } from "react-icons/ri";
import { IoMdAirplane } from "react-icons/io";
import { BsHouseDoor } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="main-hero">
      <div className="hero-left">
        <h2>Premier Worldwide Logistics Network</h2>
        <p>
          With our internationally renowned network, your goods will get to
          their final destination quickly and securely, wherever in the world.
        </p>
        <div className="left-btn">
          <Button />
        </div>
        <div className="location">
          <h3>Freight Location Updates</h3>
          <div className="track">
            <input type="text" placeholder="Enter Your track id"></input>
            <div className="trackbtn">
              <button>
                <FaLocationDot /> Track
              </button>
            </div>
          </div>
          <div className="track-item">
            <div className="track-name">
              <RiShipLine className="icon" />
              <span>Ocean Freight</span>
            </div>
            <div className="track-name">
              <IoMdAirplane  className="icon" />
              <span>Air Freight</span>
            </div>
            <div className="track-name">
              <CiDeliveryTruck className="icon" />
              <span>Road Freight</span>
            </div>
            <div className="track-name">
              <BsHouseDoor className="icon" />
              <span>Ware House</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div>
            <img src="./images/Capture2.PNG"></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
