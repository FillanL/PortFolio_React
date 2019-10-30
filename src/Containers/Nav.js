import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Scss/nav.scss'

export default function Nav() {

    let hideBar = ()=>{
        let navBarItem = document.querySelector('nav ul')

        if ( navBarItem.classList.contains('hidden')){
            navBarItem.classList.replace('hidden', 'show')
        } else {
            navBarItem.classList.replace('show', 'hidden') ||
            navBarItem.classList.add('hidden')
        }
       
    }

    // let tryThis = () => {
    //     console.log("lllllLLLL")
    // }
    return (
        <nav >
            <div className='mobile-burger' onClick={()=> hideBar()}>
                <FontAwesomeIcon icon={['fa', 'bars']} size="2x" />
            </div>
                <div className='logo'>
                   

                Fillan's Portfolio
                    
                </div>
            <ul 
            // className="hidden"
            >
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
                <li>
                    <Link to='/resume'>
                        Resume
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>
                        Contact
                    </Link>
                </li>
            </ul> 
        </nav>
    )
}
