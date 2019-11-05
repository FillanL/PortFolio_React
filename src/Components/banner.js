import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import '../Scss/banner.scss'

export default function banner() {
    return (
        <div className="banner">
            
            <img className="profile-pic" srcSet="https://images.unsplash.com/photo-1438109491414-7198515b166b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9" alt=""/>
            <div className="user-media">
                <p style={{fontSize:"1.5rem",fontFamily:"Montserrat, sans-serif"}}>
                    Fillan Lee
                </p>
                <p style={{fontFamily:"Montserrat, sans-serif", color:"rgb(90,89,89)"}}>
                    Software Engineer
                </p>
                <div>
                    <p style={{fontWeight:"500", fontFamily:"Montserrat, sans-serif"}}>
                    <FontAwesomeIcon style={{marginRight:"5px"}} icon={faMapMarkerAlt} size="1x" />  
                        Bronx, NY
                    </p>
                </div>
                <div className="">

                    <a style={{color:"rgb(67,118,178)"}} href="https://www.linkedin.com/in/fillanlee/">
                        <FontAwesomeIcon style={{marginRight:"15px"}} icon={['fab', 'linkedin']} size="2x" />
                    </a>

                    <a style={{color:"rgb(0,0,0)"}} href="https://github.com/fillanl">
                        <FontAwesomeIcon style={{marginRight:"15px"}} icon={['fab', 'github']} size="2x" />
                    </a>
                    <a style={{color:"rgb(0,0,0)"}} href="https://medium.com">
                        <FontAwesomeIcon style={{marginRight:"15px"}} icon={['fab', 'medium']} size="2x" />
                    </a>

                    <a style={{color:"rgb(219,0,0)"}} href="https://www.youtube.com/channel/UCyjCBRHP2YJyapHU7wT2qyQ">
                        <FontAwesomeIcon style={{marginRight:"15px"}} icon={['fab', 'youtube']} size="2x" />
                    </a>
                </div>
            </div>
        </div>
    )
}
