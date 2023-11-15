import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Navbar from "../../components/Navbar/Navbar";
import Thumbnail from "../../assets/thumbnails/SignUpFormJunior.jpg";

export default function SignUpFormJunior() {
  let nomeProjeto = "> Newsletter sign-up form with success message";
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
            This will test your skills with basic form structure, validation,
            and submission. The success state will also be an excellent
            opportunity to work with DOM manipulation.
          </p>
          <p>
            <strong>Live:</strong>{" "}
            <a
              href="https://gdf97.github.io/Frontend-Mentor-Newsletter-sign-up-form-with-success-message/"
              target="_blank"
            >
              https://gdf97.github.io/Frontend-Mentor-Newsletter-sign-up-form-with-success-message/
            </a>
          </p>
          <p>
            <strong>Code:</strong>{" "}
            <a
              href="https://github.com/GDF97/Frontend-Mentor-Newsletter-sign-up-form-with-success-message"
              target="_blank"
            >
              https://github.com/GDF97/Frontend-Mentor-Newsletter-sign-up-form-with-success-message
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
