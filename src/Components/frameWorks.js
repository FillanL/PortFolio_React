import React from 'react'
import IMG from '../images/ReactJS.JPG'
import '../Scss/frameworks.scss'

export default function frameWorks() {
    return (
        <div className="frame-container">
            <h2>{`//`} Languages & Frameworks</h2>
            <div className="image-container">
                <img srcSet={IMG} alt=""/>

            </div>
        </div>
    )
}
