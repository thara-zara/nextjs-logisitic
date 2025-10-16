"use client";

import { Links } from "@/data/data";
import "./navbar.css";
// import logo from "./../../../public/images/logo.svg";
import React, { useState } from "react";
import Link from "next/link";
import Button from "../Button/Button";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  return (
    <div className="navbar">
      <div className="logo">
        <Link href="/">
          <img src="/images/logo.svg"></img>
        </Link>
      </div>
      <div className="links">
        {Links.map((link) => {
          return (
            <Link key={link.id} href={link.url} className="link">
              {link.Label}
            </Link>
          );
        })}
      </div>
      <div className="navBtn">
        <Button />
      </div>


      <div className="menu" onClick={openMenu}>
        <HiOutlineMenuAlt2 />
      </div>
      <div className={`mob-nav ${open?"active":""}`}>
        {
          open&&(
              <div className="close" onClick={closeMenu}>
          <IoIosCloseCircle />
        </div>
          )
        }
      
        <div className="holder">
          {Links.map((link) => {
            return (
              <Link key={link.id} href={link.url} className="link">
                {link.Label}
              </Link>
            );
          })}
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
