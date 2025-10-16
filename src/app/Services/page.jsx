import React from "react";
import "./services.css";
import Button from "@/components/Button/Button";
import SingleScard from "@/components/SingleScard/SingleScard";

const page = () => {
  return (
    <div className="servicepage">
      <div className="sinner">
        <div className="singleservice">
          <div className="sleft">
            <h3>Drive Success with Our Proven Logistics Solutions</h3>
            <p>
              Drive the advancement of your business's achieving success with
              our tried-and-true concerning logistics solutions that work.
            </p>
            <Button />
          </div>
          <div className="sright">
            <img src="./images/banner.jpg"></img>
          </div>
        </div>

        <div className="single-scard">
          <SingleScard
            number="1"
            head="Expedited Parcel Delivery"
            title="For your ease, we offer a reliable and fast shipping service that can transport items globally quickly."
          />
          <SingleScard
            number="2"
            head="International Freight Forwarding"
            title="Our expertise in forwarding solutions allows you to manage your global shipments seamlessly."
          />
          <SingleScard
            number="3"
            head="Warehousing Solutions"
            title="Reduce the space you need with our wide warehousing solutions, which adjust to your own demands."
          />
          <SingleScard
            number="4"
            head="Same-Day Courier Services"
            title="Our same-day courier services offer exceptional speed for urgent deliveries to meet tight deadlines."
          />
          <SingleScard
            number="5"
            head="Route Optimization Assistance"
            title="Improve productivity and cut expenses with our route optimization services for simplified transportation logistics."
          />
           <SingleScard
            number="6"
            head="GPS Tracking Integration"
            title="Our powerful GPS tracking integration provides peace of mind and real-time visibility into your shipments."
          />
        </div>
      </div>
    </div>
  );
};

export default page;
