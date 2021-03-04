import React from 'react'
import {useSelector} from "react-redux"
import styled from 'styled-components'
const ViewProjects = () => {
    const projects = useSelector(state => state.projects.allProjects)
    return (
        <ProjectsContainer>
            {
                projects && projects.map(p=> <div key={p.id}>{p.project_name}</div>)
            }
        </ProjectsContainer>
    )
}

export default ViewProjects

const ProjectsContainer =  styled.div`
    padding:20px;
`
