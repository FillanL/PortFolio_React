import React from 'react'

const VideoSection = () => {
    return (
        <div>
            <h2 
            // style="padding: 1% 4%; font-family: Montserrat, sans-serif; color: rgb(124, 144, 160);"
            >//  Live Process</h2>
            <div class="videoSection" style={{backgroundColor: "rgba(124, 144, 160, 0.5)", boxSizing:"border-box"}}>

            <video id="video2" height="400px" autoplay playsinline>
                        <source src={}
                        type="video/mp4"/>
                    </video>
            <div class="video-info">
                <h2 style={{backgroundColor: "lightgray"}}>
                    Components Layout
                </h2>
                <p>
                    After pre-determining all the components needed for a specific project and what each components will contain. Create all components then place them in proper location. Comparing to the original sign as I go.

                </p>
            </div>
            </div>

            <div class="mini-span" style={{backgroundColor: "rgba(124, 144, 160, 0.35)"}}></div>

            
            <div class="videoSection">
                <div class="video-info">
                    <h2 style={{backgroundColor: "rgba(124, 144, 160, 0.35);"}}>Designing with Color</h2>
                    <p style={{lineHeight: '2.1'}}>Using background color to propperly place each tag,makes it visually easier to see overlaps and when tags are not contained where it should be.</p>
                </div>
                    <video id="video2" height="400px" autoplay playsinline>
                        <source src={}
                        type="video/mp4"/>
                    </video>
            </div>
            
            <div class="mini-span" style={{backgroundColor: "rgba(124, 144, 160, 0.35)"}}></div>
            
        </div>
    )
}

export default VideoSection
