import React from 'react'
import { SectionConatainer, SectionTitle } from '../Styles'
import styled from 'styled-components'

export default function aboutMe() {
    return (
        <SectionConatainer>
            <SectionTitle>
            {`//`} About Me
            </SectionTitle>
            <AboutMeParagraph>
            Full stack web developer with a background in accounting and finance. With experience in Ruby on Rails, 
            JavaScript, and ReactJS, as well as my experience in tax preparation, 
            I am looking to combine my current passion of web development and start a career in FinTech and/or customer 
            satisfaction. Along with my professional finance and web development skills, I also bring leadership, 
            accountability and enjoy promoting health and wellness. 
            <br></br>
            <br></br>
            My go-to designs are minimalist. Being able to make use of available spaces while using subtle and complimentary colors. 
            </AboutMeParagraph>
        </SectionConatainer>
    )
}
const AboutMeParagraph = styled.p`
    line-height:1.5;
    font-family: "Montserrat, sans-serif";
    padding: 0 5%;
    font-size: 1.05rem;
`