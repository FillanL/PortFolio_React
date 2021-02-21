import React from 'react'
import AboutMe from './aboutMe'
import FrameWorks from './frameWorks';
import Banner from './banner'
import JsonStyling from './JsonStyling'
import VideoSection from './VideoSection';
import FeatureProjects from './featureProjects';

const Home =()=> {
    const styleMode = localStorage.getItem("styleMode") ? localStorage.getItem("styleMode") : null; 
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