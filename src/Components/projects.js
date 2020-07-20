import React from 'react'
import {Link} from 'react-router-dom'

import {ProjectList} from './staticPropjects'
import '../Scss/projects.scss'

// to-do
// remove in line styling to scss file
function projects() {

    return (
        <div>
            <h2 style={{padding:"1% 4%", fontFamily:"Montserrat, sans-serif", color:"rgb(124, 144, 160)"}}>
                {`//`} Projects
            </h2>
            <div className="project-container">
                {ProjectList.map(p => 
                    <div className="project-card" key={p.name}>
                        {/* <img srcSet={p.img} alt={`${p.name}`}/> */}
                        {p.img ?
                                <img 
                                srcSet={require(`../ProjectImages/${p.img}`)} 
                                alt={p.name}/> :
                                <img 
                                srcSet="https://images.unsplash.com/photo-1568312442641-d6c790fdf0f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9" alt={p.name}/>
                        }
                        <h2>
                        <Link style={{textDecoration:"none", color:"rgba(104, 110, 260, .9)"}} to={`projects/${p.name.toLowerCase().split(" ").join("-")}`}> 
                            {p.name}
                        </Link>
                        </h2>
                    </div>
                )}
            </div>
        </div>
    )
}
export default projects