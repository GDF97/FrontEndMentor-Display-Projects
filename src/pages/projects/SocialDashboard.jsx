import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Navbar from "../../components/Navbar/Navbar";
import Thumbnail from "../../assets/thumbnails/SocialDashboard.jpg";

export default function SocialDashboard() {
  let nomeProjeto = "> Social media dashboard with theme switcher";

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
            <strong>Difficulty:</strong> Junior
          </p>
          <p>
            <strong>Desc: </strong>
            This challenge will be a perfect chance to practice your Grid
            skills. The color theme switcher also adds a nice additional test.
          </p>
          <p>
            <strong>Live:</strong>{" "}
            <a
              href="https://gdf97.github.io/social-media-dashboard/"
              target="_blank"
            >
              https://gdf97.github.io/social-media-dashboard/
            </a>
          </p>
          <p>
            <strong>Code:</strong>{" "}
            <a
              href="https://github.com/GDF97/social-media-dashboard"
              target="_blank"
            >
              https://github.com/GDF97/social-media-dashboard
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
