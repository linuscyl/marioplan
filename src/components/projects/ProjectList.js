import React from 'react'

import ProjectSummary from './ProjectSummary'

function ProjectList({ projects }) {
  return (
    <div className='project-list section'>

      {/* <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary /> */}

      {projects && projects.map(project => {
        return (
          <ProjectSummary project={project} key={project.id} />
        )
      })}

    </div>
  )
}

export default ProjectList
