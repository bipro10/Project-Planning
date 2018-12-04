import React from 'react'
//import {Collapsible} from 'react-materialize'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      { projects && projects.map(project => {
        return (
          <ProjectSummary project={project} key={project.id} />
        )
      })}  
    </div>
  )
}

/*
const ProjectList = () => {
  return (
    <Collapsible> 
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </Collapsible>
  )
}
*/

export default ProjectList;