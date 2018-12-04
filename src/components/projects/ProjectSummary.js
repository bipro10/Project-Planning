import React from 'react'
//import {CollapsibleItem} from 'react-materialize'

const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-1 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{project.title}</span>
        <p>Posted by <span Style="color:green">Biprodas</span></p>
        <p className="grey-text">9am, 3rd February</p>
      </div>
    </div>
  )
}

/*
const ProjectSummary = () => {
  return (
    <CollapsibleItem header='Project Title' icon='computer'>
      Project Details
    </CollapsibleItem>
  )
}
*/

export default ProjectSummary;