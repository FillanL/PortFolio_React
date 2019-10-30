import React from 'react'
import {Link} from 'react-router-dom'
import '../Scss/navMobile.scss'

export default function Nav() {
    return (
        <div className="holder">
            <nav className="mobile">
                <div className='mobile-burger'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>
            <nav className="desktop-nav">
                <ul className="hidden">
                    <li>
                        <Link to='/'>
                        Home
                        </Link>
                    </li>
                    {/* <span className="spacer"></span> */}
                    <li>
                        <Link to='/projects'>
                        Projects
                        </Link>
                    </li>
                    {/* <span className="spacer"></span> */}
                    <li>
                        <Link to='/resume'>
                        Resume
                        </Link>
                    </li>
                    {/* <span className="spacer"></span> */}
                    <li>
                        <Link to="/contact">
                        Contact
                        </Link>
                    </li>
                </ul> 
            </nav>
        </div>
    )
}
