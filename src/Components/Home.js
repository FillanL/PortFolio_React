import React, { Component } from 'react'

import AboutMe from './aboutMe'
import FrameWorks from './frameWorks';
import Banner from './banner'

import '../Scss/Home.scss'

class Home extends Component {
    render() {
        const projects = [{"name": "Which Way", "pic": "https://images.unsplash.com/photo-1568496696377-2809d794b942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"},{"name": "kobe", "pic":"https://images.unsplash.com/photo-1568312442641-d6c790fdf0f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"},{"name":"ball","pic":"https://images.unsplash.com/photo-1564053489984-317bbd824340?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"}, {"name":"more stuff","pic":"https://images.unsplash.com/photo-1572219479068-8a05d5310ba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"},{"name":"asfmn stuff","pic":"https://images.unsplash.com/photo-1570739193408-06ef09ded9dd?ixlib=rb-1.2.1"},{"name":"more asfa","pic":"https://images.unsplash.com/photo-1488926756850-a13b25e2f415?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"},{"name":"more uff", "pic":"https://images.unsplash.com/photo-1547043848-d94c4ea5adc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"}]
        
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
                        projects.slice(0,4).map(p => 
                            <div className="home-project-card"  key={p.name}>
                                {
                                p.pic ?
                                <img srcSet={p.pic} alt={p.name}/>:
                                <div style={{height:"100%",width:"100%", background:"linear-gradient(-0.1turn, #7c90a0, #f8f8f8, #7c90a0)"}}></div>
                                }
                                <h3 className="project-name">
                                {p.name}
                                </h3>
                                <div className="desc"> 
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsa saepe maxime? Alias eos laborum libero, veniam, sequi doloribus possimus voluptatibus mollitia at perspiciatis illo, culpa accusamus nostrum velit harum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                    <a href={} target="_blank" rel="noopener noreferrer">link</a>
                                </div>
                            </div>
                        )
                    }
                 </div>
                <div className="mini-span"></div>
                <FrameWorks/>
            </div>
        )
    }
}
export default Home