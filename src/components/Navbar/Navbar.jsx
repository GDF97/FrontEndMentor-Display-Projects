import React from "react";
import MoonIcon from "../../assets/icons/full-moon.png";
import "./styles.css";

export default function Navbar() {
  const name = "<GDF97>";

  return (
    <header className="Header">
      <a href="https://github.com/GDF97" target="_blank">
        <img src={MoonIcon} alt="" className="img" />
        <p>{name}</p>
      </a>
      <a href="https://github.com/GDF97/FrontEndMentor-Display" target="_blank">
        Github Source
      </a>
    </header>
  );
}
