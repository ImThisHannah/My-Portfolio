
import React from 'react';
import Project from '../components/Project';

const projects = [
    { title: 'Project 1', liveLink: 'https://example.com', repoLink: 'https://github.com/ImThisHannah/Project-1' },
    { title: 'Project 2', liveLink: 'https://example.com', repoLink: 'https://github.com/repo2' },
    
];

const Portfolio = () => {
    return (
        <section>
            <h2>My Projects</h2>
            <div className="projects">
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
