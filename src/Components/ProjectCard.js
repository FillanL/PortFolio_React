import React from 'react'
import styled from 'styled-components'
import Breakpoint from '../Styles/sizing'
import { Divider } from '../Styles'


const ProjectCard = ({ProjectInfo}) => {
    return (
        <ProjectCardContainer>
            <img 
                srcSet="https://images.unsplash.com/photo-1568312442641-d6c790fdf0f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9" 
                alt={ProjectInfo.name}
            />
            <ProjectTitle>
                {ProjectInfo.name}
            </ProjectTitle>
            <DescriptionSection> 
                <p>
                    {ProjectInfo.description}
                </p>
                <span>
                    <a href={`${ProjectInfo.url}`} target="_blank" rel="noopener noreferrer">
                        Live Demo 
                    </a> 
                </span>&nbsp; | &nbsp;
                <span>
                    {ProjectInfo.ytWalkThrough ?
                        <a href={`${ProjectInfo.ytWalkThrough}`} target="_blank" rel="noopener noreferrer"> 
                            WalkThrough
                        </a>:
                        null
                    }
                </span>
            </DescriptionSection>
            {/* <Divider/> */}
        </ProjectCardContainer>
    )
}

export default ProjectCard

const ProjectCardContainer = styled.div`
    img{
        width: 100%;
        height:300px;
        margin: auto;
    }
    a{
        text-decoration:none;
        color: lightcoral;
        &:hover {
            color:lightgray
        }
    }
    p{
        padding: 7px 0;
    }
    ${Breakpoint.lg}{
        padding: 0 10px;
    }
    ${Breakpoint.sm}{
        padding: 0 10px;
    }

`
const ProjectTitle = styled.h3`
    padding-top:5px;
`
const DescriptionSection = styled.div`
    padding-bottom: 20px;
`