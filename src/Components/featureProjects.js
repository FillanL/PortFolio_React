import React from 'react'
import { SectionConatainer, SectionTitle } from '../Styles'
import {ProjectList} from './staticPropjects'
import ProjectCard from './ProjectCard'
import Breakpoint from '../Styles/sizing'


import styled from 'styled-components';


const featureProjects = ({Project}) => {
    console.log(ProjectList)
    return (
        <SectionConatainer>
            <SectionTitle>
            {`//`}  Latest Projects
            </SectionTitle>
            <CardContainer>
                {ProjectList.splice(0,3).map(project =><ProjectCard key={project.id} ProjectInfo={project}></ProjectCard>)}
            </CardContainer>
        </SectionConatainer>
    )
}

export default featureProjects
const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    ${Breakpoint.sm}{
        grid-template-columns:50% 50%;
        margin: auto;
    };
    ${Breakpoint.lg}{
        grid-template-columns: repeat(3,1fr);
        margin: auto;
    };

`