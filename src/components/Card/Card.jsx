import { Link } from "react-router-dom";
import React from "react";
import "./styles.css";

export default function Card({ image, difficulty, title, text, stacks, link }) {
  const classes = {
    Newbie: "Newbie",
    Junior: "Junior",
    Intermediate: "Intermediate",
  };
  let classDifficulty = `difficultyBox ` + classes[difficulty];

  let newLink = "/pages/projects/" + link;

  return (
    <Link exact to={newLink}>
      <div className="card">
        <div className={classDifficulty}>{difficulty}</div>
        <img src={image} alt="desafio" />
        <div>
          <h1>{title}</h1>
          <p>{text}</p>
          <p>{stacks}</p>
        </div>
      </div>
    </Link>
  );
}
