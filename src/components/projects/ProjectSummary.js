import React from 'react'

function ProjectSummary({ project }) {
  return (
    <div className='card z-depth-0 project-summary'>
      <span className='card-title'>{project.title}</span>
      <p>Posted by the Net Ninja</p>
      <p className='grey-text'>3rd Septembe, 2 am</p>
      <br />
    </div >
  )
}

export default ProjectSummary
