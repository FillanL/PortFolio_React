import React from "react"
import styled from "styled-components";
import {useSelector} from "react-redux";

import { SectionConatainer, SectionTitle } from "../Styles";
import ProjectCard from "./ProjectCard";
import Breakpoint from "../Styles/sizing";

const FeatureProjects = ({Project}) => {
    
    const proj = useSelector(state => state.projects.allProjects)
    return (
        <SectionConatainer>
            <SectionTitle>
            {`//`}  Latest Projects
            </SectionTitle>
            <CardContainer>
                {proj && proj.slice(0,3).map(project =><ProjectCard key={project.id} ProjectInfo={project}></ProjectCard>)}
            </CardContainer>
        </SectionConatainer>
    )
}

export default FeatureProjects
const CardContainer = styled.div`
    height:auto;
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