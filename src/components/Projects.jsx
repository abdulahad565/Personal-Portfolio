import React from "react";
import P1 from '../assets/P1.jpg';
import P2 from '../assets/P2.jpg';
import image from '../assets/image.png';



const Projects = () => {
  const projects = [
    {
      title: "Prayer Time Application",
      description: "A Prayer Time desktop application written in python that reminds the time of Every prayer in a day by playing the Azan. It also  tells the remaining time in the next prayer ",
      imgSrc: P1
    },
    {
      title: "Expense Tracker",
      description: " Expense Tracker written in React that take the Income and store the record of expenses and show the remaining Balance ",
      imgSrc: P2
    },
    {
      title: "Fresh Basket Clone",
      description: "A Clone website of Fresh Basket made with React  ",
      imgSrc: image
    }
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imgSrc} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
