import React from "react";
import "../style/Header.css";
import logo from "../imgs/logo.png";
export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="links">
        <span>Home</span>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Projects</a>
        <a href="">Testimonials</a>
        <a href="">Blog</a>
        <a href="">contact</a>
      </div>
      <div className="quote">
        <button>
          <span>GET QUOTE</span>
        </button>
      </div>
      <div className="sideNav">
        <div className="list">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
