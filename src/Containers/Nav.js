import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Scss/nav.scss'

export default function Nav() {

    let hideBar = () => {
        let navBarItem = document.querySelector('.main-nav ul')
        console.log("clicked")

        if (navBarItem.classList.contains('hidden')) {
            navBarItem.classList.replace('hidden', 'show')
        } else {
            navBarItem.classList.replace('show', 'hidden') ||
                navBarItem.classList.add('hidden')
        }

    }


    return (
        <nav className="main-nav">
            <div className='mobile-burger' onClick={() => hideBar()}>
                <FontAwesomeIcon icon={['fa', 'bars']} size="2x" />
                <div className='logo'>
                    {'//'} Fillan
                </div>
            </div>
            <div className="welcome">
                <h2>
                    {'//'} Fillan
                </h2>
            </div>
            <ul>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/projects'>
                        Projects
                    </Link>
                </li>
                {/* <li>
                    <Link to='/resume'>
                        Resume
                    </Link>
                </li> */}
                <li>
                    <Link to='/contact'>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
