import React from "react";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import { BiChevronDown } from "react-icons/bi";
import { useState, useEffect } from "react";
import "./Home.css";
import TestAPI from "../api/data.json";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("All Projects");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [projects, setProjects] = useState([]);

  const menuObj = {
    false: "Close",
    true: "Open",
  };
  let MenuListClass = "MenuList " + menuObj[open];

  useEffect(() => {
    setProjects(TestAPI);
  }, []);

  useEffect(() => {
    setFilteredProjects(
      projects.filter((projects) => projects.difficulty === filter)
    );
  }, [filter]);

  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="Home">
      <main className="Main">
        <h1>FrontEndMentor - Projects</h1>
        <div className="Menu">
          <button className="MenuButton" onClick={openMenu}>
            {filter} <BiChevronDown />
          </button>
          <ul className={MenuListClass}>
            <li
              onClick={() => {
                setFilter("All Projects"), setOpen(false);
              }}
            >
              All Projects
            </li>
            <li
              onClick={() => {
                setFilter("Newbie"), setOpen(false);
              }}
            >
              Newbie
            </li>
            <li
              onClick={() => {
                setFilter("Junior"), setOpen(false);
              }}
            >
              Junior
            </li>
            <li
              onClick={() => {
                setFilter("Intermediate"), setOpen(false);
              }}
            >
              Intermediate
            </li>
          </ul>
        </div>
        <section className="Section">
          {filter == "All Projects" ? (
            <>
              {projects.map((challange, index) => (
                <Card
                  key={index}
                  difficulty={challange.difficulty}
                  image={challange.image}
                  title={challange.title}
                  text={challange.text}
                  stacks={challange.stacks}
                  link={challange.link}
                />
              ))}
            </>
          ) : (
            <>
              {filteredProjects.map((challange, index) => (
                <Card
                  key={index}
                  difficulty={challange.difficulty}
                  image={challange.image}
                  title={challange.title}
                  text={challange.text}
                  stacks={challange.stacks}
                  link={challange.link}
                />
              ))}
            </>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
