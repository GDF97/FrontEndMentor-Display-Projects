import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Navbar from "../../components/Navbar/Navbar";
import Thumbnail from "../../assets/thumbnails/ProfileCard.jpg";

export default function Profilecard() {
  let nomeProjeto = "> Profile card component";
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
            <strong>Difficulty:</strong> Newbie
          </p>
          <p>
            <strong>Desc: </strong>
            This is a perfect challenge to test your layout skills. The card
            layout doesn't shift, so it's also great for those that haven't
            dived into responsive websites yet!
          </p>
          <p>
            <strong>Live:</strong>{" "}
            <a
              href="https://gdf97.github.io/Profile-card-component/"
              target="_blank"
            >
              https://gdf97.github.io/Profile-card-component/
            </a>
          </p>
          <p>
            <strong>Code:</strong>{" "}
            <a
              href="https://github.com/GDF97/Profile-card-component"
              target="_blank"
            >
              https://github.com/GDF97/Profile-card-component
            </a>
          </p>
          <p>
            <strong>Stack:</strong> HTML - CSS
          </p>
          <img src={Thumbnail} alt="" />
        </section>
      </main>
    </div>
  );
}
