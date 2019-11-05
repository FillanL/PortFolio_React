import React from 'react'
import reactPNG from '../images/Reactjs.png'
import reduxPNG from '../images/redux.png'
import nodePNG from '../images/nodejs.png'
import '../Scss/frameworks.scss'

export default function frameWorks() {
    return (
        <div className="frame-container">
            <h2 style={{fontFamily:"Montserrat, sans-serif"}}>{`//`} Languages & Frameworks</h2>
            <div className="image-container">
                <img srcSet={reactPNG} alt="ReactJS"/>
                <img srcSet={nodePNG} alt="nodeJS"/>
                <img srcSet={reduxPNG} alt="redux"/>

            </div>
        </div>
    )
}
