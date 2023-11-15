import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Thumbnail from "../../assets/thumbnails/TimeDashboard.jpg";

export default function TimeDashboard() {
  let nomeProjeto = "> Time tracking dashboard";
  return (
    <div className="ProjectsPage">
      <main className="Main">
        <div className="Main-header">
          <Link to={"/"}>Projetos</Link>
          <h1>{nomeProjeto}</h1>
        </div>
        <section className="Conteudo">
          <p>
            <strong>Difficulty:</strong> Junior
          </p>
          <p>
            <strong>Desc: </strong>A perfect opportunity to practice your CSS
            Grid skills. For anyone wanting to take it up a notch, we provide a
            JSON data file to practice working with data.
          </p>
          <p>
            <strong>Live:</strong>{" "}
            <a
              href="https://gdf97.github.io/time-tracking-dashboard/"
              target="_blank"
            >
              https://gdf97.github.io/time-tracking-dashboard/
            </a>
          </p>
          <p>
            <strong>Code:</strong>{" "}
            <a
              href="https://github.com/GDF97/time-tracking-dashboard"
              target="_blank"
            >
              https://github.com/GDF97/time-tracking-dashboard
            </a>
          </p>
          <p>
            <strong>Stack:</strong> HTML - CSS - JS
          </p>
          <img src={Thumbnail} alt="" />
        </section>
      </main>
    </div>
  );
}
