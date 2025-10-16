import React from "react";
import "./footer.css";
import Link from "next/link";
import { Links } from "@/data/data";

const Footer = () => {
  return (
    <div className="foot">
      <div className="footer">
        <div>
          <h3>We have all your needs, from start to the world end.</h3>
          <img src="./images/map.svg"></img>
        </div>

        <div>
          <h3>Links</h3>
          <div className="f-links">
            {Links.map((link) => {
              return (
                <Link key={link.id} href={link.url} className="f-link">
                  {link.Label}
                </Link>
              );
            })}
          </div>
        </div>
        <div>
          <h3>Contact</h3>
          <span>
            +1 456 123 002 478 <br />
            moversflow@mail.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
