import React from 'react'
import styled from 'styled-components'
import vid from '../Video/codeProcess1.mp4'
import vid1 from '../Video/codeProcess2.mp4'
import { SectionConatainer, SectionTitle } from '../Styles'
import Breakpoint from '../Styles/sizing'

const VideoSection = () => {
    return (
        <SectionConatainer padding={"0 0"}>
            <SectionTitle padding={"0 5%"}>
            {`//`} Live Process
            </SectionTitle>
            <VideoSectionContainer bgColor={"rgba(124, 144, 160, 0.5)"}>
                <VideoInfo>
                    <HighLightedH2 bgColor={"lightgray"}>
                        Components Layout
                    </HighLightedH2>
                    <p>
                        After pre-determining all the components needed for a specific 
                        project and what each components will contain. Create all components 
                        then place them in proper location. Comparing to the original sign as I go.
                    </p>
                </VideoInfo>
                <Video muted autoPlay playsInline>
                    <source 
                        src={vid} 
                        type="video/mp4"
                    />
                </Video>
            </VideoSectionContainer>
            <VideoSectionContainer rowTwo={true}>
                <VideoInfo>
                    <HighLightedH2 bgColor={"rgba(124, 144, 160, 0.35)"}>
                        Designing with Color
                    </HighLightedH2>
                    <p>
                        Using background color to propperly place each tag, 
                        makes it visually easier to see overlaps and when tags are not 
                        contained where it should be.
                    </p>
                </VideoInfo>
                <Video rowTwo={true} muted autoPlay playsInline>
                    <source 
                        src={vid1}
                        type="video/mp4"
                    />
                </Video>
            </VideoSectionContainer>
        </SectionConatainer>
    )
}

export default VideoSection

const VideoSectionContainer = styled.div`
    background-color: ${props=> props.bgColor ? props.bgColor : ""};
    padding:0 3%;
    ${Breakpoint.sm}{
        display:grid;
        grid-template-columns: ${props => props.rowTwo? "65% 35%" : "35% 65%"};
        grid-template-areas: 'vid''container';
    }
`
const VideoInfo = styled.div`
    text-align: center;
    padding: 20px;
    margin: 0 auto;
    p{
        padding-top:10px;
        text-align: center;
        line-height:1.5;
    }
`
const Video = styled.video`
    width:100%;
    text-align: center;
    margin: auto;
    ${Breakpoint.sm}{
        width:75%;
        margin:auto;
        padding-top:15px;
        grid-area: ${props =>props.rowTwo ? "vid": null};
    }
`
const HighLightedH2 = styled.h2`
    background-color: ${props=> props.bgColor? props.bgColor : null};
`