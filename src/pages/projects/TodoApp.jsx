import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Navbar from "../../components/Navbar/Navbar";
import Thumbnail from "../../assets/thumbnails/TodoApp.jpg";

export default function TodoApp() {
  let nomeProjeto = "> Todo app";
  return (
    <div className="ProjectsPage">
      <Navbar />
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
            The classic todo app with a few twists! This app includes a
            dark/light theme toggle
          </p>
          <p>
            <strong>Live:</strong>{" "}
            <a
              href="https://gdf97.github.io/Todo-App-Frontend-Mentor/"
              target="_blank"
            >
              https://gdf97.github.io/Todo-App-Frontend-Mentor/
            </a>
          </p>
          <p>
            <strong>Code:</strong>{" "}
            <a
              href="https://github.com/GDF97/Todo-App-Frontend-Mentor"
              target="_blank"
            >
              https://github.com/GDF97/Todo-App-Frontend-Mentor
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
