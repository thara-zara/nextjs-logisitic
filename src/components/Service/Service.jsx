import React from "react";
import "./service.css";
import Button from "../Button/Button";

const Service = () => {
  return (
    <div>
      <div className="singleservice">
        <div className="sleft">
          <h3>Fast Air Transport</h3>
          <p>
            Put your trust in our track record of reliable cargo delivery, where
            we always put your shipments' safe and on-time arrival first.
          </p>
          <Button />
        </div>
        <div className="sright">
          <img src="./images/plane.png"></img>
        </div>
      </div>
      <div className="singleservice">
        <div className="sleft">
          <h3>Cargo Trucking Solutions</h3>
          <p>
            Take advantage of our effective cargo trucking options, which are
            meant to reduce transit times and increase production.
          </p>
          <Button />
        </div>
        <div className="sright">
          <img src="./images/truck.png"></img>
        </div>
      </div>
      <div className="singleservice">
        <div className="sleft">
          <h3>Ocean Freight Shipping</h3>
          <p>
            You could depend on our skills with ocean shipping to get your cargo
            to locations worldwide in a cheap and timely way.
          </p>
          <Button />
        </div>
        <div className="sright">
          <img src="./images/ship.png"></img>
        </div>
      </div>
      <div className="singleservice">
        <div className="sleft">
          <h3>Rail Transport Solutions</h3>
          <p>
            Efficient, reliable rail transport ensures your cargo arrives
            punctually, every time, optimizing your business operations.
          </p>
          <Button />
        </div>
        <div className="sright">
          <img src="./images/train.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Service;
