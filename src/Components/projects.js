import React from 'react'

import {ProjectList} from './staticPropjects'
import '../Scss/projects.scss'


function projects() {

    return (
        <div>
            <h2 style={{padding:"1% 4%", fontFamily:"Montserrat, sans-serif", color:"rgb(124, 144, 160)"}}>
                {`//`} Projects
            </h2>
            <div className="project-container">
                {ProjectList.map(p => 
                    <div className="project-card" key={p.name}>
                        <img srcSet={p.img} alt={`${p.name}`}/>
                        <h2>
                            {p.name}
                        </h2>
                    </div>
                )}
            </div>
        </div>
    )
}
export default projects