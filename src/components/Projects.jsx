import React from "react";
import Styles from "../Styles/Projects.module.css";
import project1 from "../assets/quiz.png";
import project2 from "../assets/tictactoe.png";
import project3 from "../assets/productivity.png";

const Projects = () => {
  return (
    <section id={Styles.projectsSection} className={Styles.projectSection}>
      <h2 className={Styles.header}>My Projects</h2>
      <div className={Styles.projectContainer}>
        <div className={Styles.projectCards}>
          <h3 className={Styles.projectTitle}>Quiz App</h3>
          <img src={project1} alt="project-1" className={Styles.quizImg} />

          <p className={Styles.techStack}>Tech Stack: MERN Stack</p>
          <p className={Styles.projectPara}>
            A Quiz Manager App allows users to create, manage, and take quizzes.
            It typically features question creation, answer options, real-time
            scoring, and performance tracking, making it ideal for educational
            or entertainment purposes.
          </p>
          <div className={Styles.cardBtn}>
            <a href="" className={Styles.workBtn}>
              GitHub
            </a>
            <a href="" className={Styles.workBtn}>
              Demo
            </a>
          </div>
        </div>
        <div className={Styles.projectCards}>
          <h3 className={Styles.projectTitle}>Tic-Tac-Toe</h3>
          <img src={project2} alt="project-2" className={Styles.ticImg} />
          <p className={Styles.techStack}>Tech Stack: React</p>

          <p className={Styles.projectPara}>
            Developed a Tic-Tac-Toe game, allowing users to play and track their
            moves in real-time.
          </p>
          <div className={Styles.cardBtn}>
            <a href="" className={Styles.workBtn}>
              GitHub
            </a>
            <a href="" className={Styles.workBtn}>
              Demo
            </a>
          </div>
        </div>

        <div className={Styles.projectCards}>
          <h3 className={Styles.projectTitle}>To Do App</h3>
          <img src={project3} alt="project-2" className={Styles.toDoImg} />
          <p className={Styles.techStack}>Tech Stack: MERN</p>

          <p className={Styles.projectPara}>
            A To-Do App helps users organize and manage tasks by creating,
            editing, and tracking to-do lists.
          </p>
          <div className={Styles.cardBtn}>
            <a href="" className={Styles.workBtn}>
              GitHub
            </a>
            <a href="" className={Styles.workBtn}>
              Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
