import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Thumbnail from "../../assets/thumbnails/UrlAPIpage.png";

export default function UrlAPIpage() {
  let nomeProjeto = "> URL shortening API landing page";
  return (
    <div className="ProjectsPage">
      <main className="Main">
        <div className="Main-header">
          <Link to={"/"}>Projetos</Link>
          <h1>{nomeProjeto}</h1>
        </div>
        <section className="Conteudo">
          <p>
            <strong>Difficulty:</strong> Intermediate
          </p>
          <p>
            <strong>Desc: </strong>
            Integrate with the Clean URI link shortening API and play with
            browser storage in this landing page challenge.
          </p>
          <p>
            <strong>Live:</strong>{" "}
            <a
              href="https://gdf97.github.io/url-shortening-api/"
              target="_blank"
            >
              https://gdf97.github.io/url-shortening-api/
            </a>
          </p>
          <p>
            <strong>Code:</strong>{" "}
            <a
              href="https://github.com/GDF97/url-shortening-api"
              target="_blank"
            >
              https://github.com/GDF97/url-shortening-api
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
