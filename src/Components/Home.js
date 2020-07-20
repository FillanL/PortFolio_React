import React, { Component } from 'react'

import AboutMe from './aboutMe'
import FrameWorks from './frameWorks';
import Banner from './banner'
import {ProjectList} from './staticPropjects'

import '../Scss/Home.scss'
import VideoSection from './VideoSection';

class Home extends Component {
    render() {
        
        
        return (
            <div className="">

                <Banner/>
                <AboutMe/>

                <h2 style={{padding:"1% 4%", fontFamily:"Montserrat, sans-serif", color:"rgb(124, 144, 160)"}}>
                {`//`}  Latest Projects
                </h2>
                <div className="mini-span"></div>
                 <div className="project-containter"> 
                    {
                        ProjectList.slice(0,4).map(p => 
                            <div className="home-project-card"  key={p.name}>
                                {
                                p.img ?
                                <img srcSet={p.img} alt={p.name}/>:
                                <div style={{height:"100%",width:"100%", background:"linear-gradient(-0.1turn, #7c90a0, #f8f8f8, #7c90a0)"}}></div>
                                }
                                <h3 className="project-name">
                                {p.name}
                                </h3>
                                <div className="desc"> 
                                    <p>
                                    {p.description}
                                    </p>
                                    <a href={`${p.url}`} target="_blank" rel="noopener noreferrer">link</a>
                                </div>
                            </div>
                        )
                    }
                 </div>
                <div className="mini-span"></div>
                <VideoSection/>
                <FrameWorks/>
            </div>
        )
    }
}
export default Home