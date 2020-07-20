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
                                <img 
                                srcSet={require(`../ProjectImages/${p.img}`)} 
                                alt={p.name}/> :
                                <img 
                                srcSet="https://images.unsplash.com/photo-1568312442641-d6c790fdf0f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9" alt={p.name}/>
                                // <div style={{height:"100%",width:"100%", background:"linear-gradient(-0.1turn, #7c90a0, #f8f8f8, #7c90a0)"}}></div>
                                }
                                <h3 className="project-name">
                                {p.name}
                                </h3>
                                <div className="desc"> 
                                    <p>
                                    {p.description}
                                    </p>
                                    <span>

                                    <a style={{textDecoration:"none"}} href={`${p.url}`} target="_blank" rel="noopener noreferrer">Live Demo 
                                    </a> 
                                    </span>
                                     | 
                                    <span>

                                    {p.ytWalkThrough ?
                                    <a style={{textDecoration:"none"}} href={`${p.ytWalkThrough}`} target="_blank" rel="noopener noreferrer"> WalkThrough</a>: null}
                                    </span>
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