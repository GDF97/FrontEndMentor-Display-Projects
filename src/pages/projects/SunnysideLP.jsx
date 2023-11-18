import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Thumbnail from "../../assets/thumbnails/SunnySideLP.png";

export default function SunnysideLP() {
  let nomeProjeto = "> Sunnyside agency landing page";

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
            <strong>Desc: </strong>
            This challenge will be a perfect test of your layout and responsive
            skills. There's a tiny bit of JS for the mobile menu, but the focus
            is HTML & CSS.
          </p>
          <p>
            <strong>Live:</strong>{" "}
            <a
              href="https://gdf97.github.io/sunnyside-agency-landing-page/"
              target="_blank"
            >
              https://gdf97.github.io/sunnyside-agency-landing-page/
            </a>
          </p>
          <p>
            <strong>Code:</strong>{" "}
            <a
              href="https://github.com/GDF97/sunnyside-agency-landing-page"
              target="_blank"
            >
              https://github.com/GDF97/sunnyside-agency-landing-page
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
