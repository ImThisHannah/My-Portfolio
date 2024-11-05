
import React from 'react';

const Project = ({ title, image, liveLink, repoLink }) => {
    return (
        <div className="project">
            <img src={image} alt={`${title} screenshot`} />
            <h3>{title}</h3>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">Live App</a>
            <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
    );
};

export default Project;
