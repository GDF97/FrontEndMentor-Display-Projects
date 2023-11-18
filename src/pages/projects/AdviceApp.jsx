import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Thumbnail from "../../assets/thumbnails/Advice.png";

export default function AdviceApp() {
  let nomeProjeto = "> Advice generator app";
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
            In this challenge, you'll be building out an FAQ accordion. This is
            an extremely common front-end pattern, so it's a great opportunity
            to get some practice in!
          </p>
          <p>
            <strong>Live:</strong>{" "}
            <a
              href="https://gdf97.github.io/Advice-generator-app-API/"
              target="_blank"
            >
              https://gdf97.github.io/Advice-generator-app-API/
            </a>
          </p>
          <p>
            <strong>Code:</strong>{" "}
            <a
              href="https://github.com/GDF97/Advice-generator-app-API"
              target="_blank"
            >
              https://github.com/GDF97/Advice-generator-app-API
            </a>
          </p>
          <p>
            <strong>Stack:</strong> HTML - CSS - JS - API
          </p>
          <img src={Thumbnail} alt="" />
        </section>
      </main>
    </div>
  );
}
