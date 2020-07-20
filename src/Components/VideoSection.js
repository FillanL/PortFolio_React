import React from 'react'
import vid from '../Video/codeProcess1.mp4'
import vid1 from '../Video/codeProcess2.mp4'
import '../Scss/videoSection.scss'


const VideoSection = () => {
    return (
        <div>
            <h2 style={{padding:" 1% 4%", fontFamily: "Montserrat, sans-serif", color: "rgb(124, 144, 160)"}}>
            {`//`} Live Process
            </h2>
            <div className="videoSection" style={{backgroundColor: "rgba(124, 144, 160, 0.5)", boxSizing:"border-box"}}>
                <video id="video2" height="400px" muted autoPlay playsInline>
                    <source src={vid} type="video/mp4"/>
                </video>
            <div className="video-info">
                <h2 style={{backgroundColor: "lightgray"}}>
                    Components Layout
                </h2>
                <p>
                    After pre-determining all the components needed for a specific project and what each components will contain. Create all components then place them in proper location. Comparing to the original sign as I go.
                </p>
            </div>
            </div>

            <div className="mini-span" style={{backgroundColor: "rgba(124, 144, 160, 0.35)"}}></div>

            <div className="videoSection">
                <div className="video-info">
                    <h2 style={{backgroundColor: "rgba(124, 144, 160, 0.35)"}}>
                        Designing with Color
                    </h2>
                    <p>Using background color to propperly place each tag, makes it visually easier to see overlaps and when tags are not contained where it should be.
                    </p>
                </div>
                    <video id="video2" height="400px" muted autoPlay playsInline>
                        <source 
                        src={vid1}
                        type="video/mp4"
                        />
                    </video>
            </div>
            
            <div className="mini-span" style={{backgroundColor: "rgba(124, 144, 160, 0.35)"}}></div>
            
        </div>
    )
}

export default VideoSection
