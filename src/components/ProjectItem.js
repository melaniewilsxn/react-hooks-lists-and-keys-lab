import React from "react";

function ProjectItem({ name, about, technologies }) {

  const technologyCards = technologies.map((technologyObj) =>{
    return <span key={technologyObj}>{technologyObj}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologyCards}
      </div>
    </div>
  );
}

export default ProjectItem;
