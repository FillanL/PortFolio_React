import React from 'react'
import { Helmet } from 'react-helmet'
// import {Lemede} from '../ProjectImages/Lemede.jpg'

import { ProjectList } from './staticPropjects'
// to-do
// remove in line styling to scss file

const ProjectShow = (props) => {

    const project = ProjectList.filter(project =>
        project.name.toLowerCase() === props.match.params.id.split("-").join(" "))[0]
    return (
        <div>
            <Helmet>
                <title>
                    {project.name}
                </title>
                <meta
                    name="description"
                    content={project.description}
                />
            </Helmet>

            <div style={{ "padding": "20px", boxSizing: "border-box" }}>
                <h1 style={{ "textAlign": "center",margin:"auto", marginBottom: "20px", color: "rgba(124, 144, 160, 0.6)", boxShadow: "lightgray 0px 0px 3px", width: "50vw" }}>
                    {project.name}
                </h1>

                
                <div style={{ "display": "flex" }}>

                    <img srcSet={require(`../ProjectImages/${project.img}`)} alt={project.name} style={{ "height": "400px", width: "350px" }} />

                        <div style={{"padding": "20px", "boxSizing": "border-box"}}>
                    <strong style={{ "fontSize": "22px", backgroundColor: "rgba(124, 144, 160, 0.35)" }}>
                        About Project
                    
                    </strong>
                    <br></br>
                    <br></br>

                    <p style={{ lineHeight: "2" }}>
                        {project.description}
                    <br></br>
            {/* - <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ "textDecoration": "none", color: "rgba(124, 144, 160, 0.8)" }}>
                        Link
            </a> */}
            
                        </p>
                        <span>

                            <a style={{textDecoration:"none"}} href={`${project.url}`} target="_blank" rel="noopener noreferrer"> 
                            Live Demo  
                            </a> 
                            </span>
                                | 
                            <span>

                            {project.ytWalkThrough ?
                            <a style={{textDecoration:"none"}} href={`${project.ytWalkThrough}`} target="_blank" rel="noopener noreferrer"> WalkThrough</a>: null}
                            </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectShow
