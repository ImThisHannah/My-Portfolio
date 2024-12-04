import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  const [projects] = useState([
    {
      name: 'War the Card Game',
      description: 'Project 1',
      link: "https://github.com",
      repo: "https://github.com/ImThisHannah/Project-1"
    },
    {
      name: 'The chefs compass',
      description: 'Project 2',
      link: "https://github.com",
      repo: "https://github.com/josh-hensley/the-cooks-compass"
    },
    {
      name: 'ReadMe Generator',
      description: 'HTML/CSS',
      link: "https://github.com",
      repo: "https://github.com/ImThisHannah/Read-Me-generator"
    },
   
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
