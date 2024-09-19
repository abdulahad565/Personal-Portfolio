import React from "react";

const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "CSS", level: 60 }
  ];

  return (
    <div className="skills">
      <h2>My Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="skill-bar">
          <span>{skill.name}</span>
          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
