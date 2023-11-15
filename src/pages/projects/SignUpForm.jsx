import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Thumbnail from "../../assets/thumbnails/SignUpForm.png";

export default function SignUpForm() {
  let nomeProjeto = "> Intro component with sign-up form";
  return (
    <div className="ProjectsPage">
      <main className="Main">
        <div className="Main-header">
          <Link to={"/"}>Projetos</Link>
          <h1>{nomeProjeto}</h1>
        </div>
        <section className="Conteudo">
          <p>
            <strong>Difficulty:</strong> Newbie
          </p>
          <p>
            <strong>Desc: </strong>
            Practice building out a sign-up form complete with client-side
            validation using JavaScript.
          </p>
          <p>
            <strong>Live:</strong>{" "}
            <a
              href="https://gdf97.github.io/Intro-component-with-signup-form/"
              target="_blank"
            >
              https://gdf97.github.io/Intro-component-with-signup-form/
            </a>
          </p>
          <p>
            <strong>Code:</strong>{" "}
            <a
              href="https://github.com/GDF97/Intro-component-with-signup-form"
              target="_blank"
            >
              https://github.com/GDF97/Intro-component-with-signup-form
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
