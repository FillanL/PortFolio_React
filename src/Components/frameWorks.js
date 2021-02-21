import React from 'react'
import styled from 'styled-components'
import reactPNG from '../images/Reactjs.png'
import reduxPNG from '../images/redux.png'
import nodePNG from '../images/nodejs.png'
import sassPNG from '../images/sass-css.png'
import { SectionConatainer, SectionTitle } from '../Styles'
import Breakpoint from '../Styles/sizing'


function frameWorks() {
    return (
        <SectionConatainer>
            <SectionTitle>
                {`//`} Languages & Frameworks
            </SectionTitle>
            <ImageContainer>
                <Image srcSet={reactPNG} alt="ReactJS"/>
                <Image srcSet={nodePNG} alt="nodeJS"/>
                <Image srcSet={reduxPNG} alt="redux"/>
                <Image srcSet={sassPNG} alt="redux"/>
            </ImageContainer>
        </SectionConatainer>
    )
}
export default frameWorks

const ImageContainer = styled.div`

`;
const Image = styled.img`
    width: 100px;
    height: 100px;
    ${Breakpoint.sm}{
        width:150px;
        height:125px;
    }
`;
