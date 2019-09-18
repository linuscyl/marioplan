import React from 'react'

import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom'

function ProjectList({ projects }) {
  return (
    <div className='project-list section'>

      {/* <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary /> */}

      {projects && projects.map(project => {
        return (
          <Link to={'/project/' + project.id} key={project.id} >
            <ProjectSummary project={project} key={project.id} />
            {console.log('project.id is: ', project.id)}
          </Link>
        )
      })}

    </div>
  )
}

export default ProjectList
