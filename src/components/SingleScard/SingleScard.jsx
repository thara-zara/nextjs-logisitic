import React from "react";
import "./singlescard.css";

const SingleScard = ({head,title,number}) => {
  return (
    <div className="ssingle">
      <h1>{number}</h1>
      <h5>{head}</h5>
      <p>
       {title}
      </p>
    </div>
  );
};

export default SingleScard;
