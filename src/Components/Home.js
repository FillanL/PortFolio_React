import React from 'react'
import AboutMe from './aboutMe'
import FrameWorks from './frameWorks';
import Banner from './banner'
import JsonStyling from './JsonStyling'
import VideoSection from './VideoSection';
import FeatureProjects from './featureProjects';
import { useSelector } from 'react-redux'

const Home =()=> {
    const styleMode = useSelector(state => state.general.webStyle)
    return (
        styleMode === "jsonn" ?
        <JsonStyling/>
        :<>
            <Banner/>
            <AboutMe/>
            <FeatureProjects/>
            <VideoSection/>
            <FrameWorks/>
        </>
    )
}
export default Home