import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareUp } from "@fortawesome/free-solid-svg-icons";


import '../Scss/footer.scss'
export default class Footer extends Component {
    render() {
        return (
            <footer>
                <h2 className="Logo">
                    Fillan L.
                </h2>
                <div>
                    <ul>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li>
                            <Link to="/">
                                Linkedin
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Github
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                YouTube
                            </Link>
                        </li>
                    </ul>
                </div>
                <div id="scrollIconContainer">
                    <FontAwesomeIcon 
                        icon={faCaretSquareUp}
                        size="3x"
                        onClick={()=> window.scrollTo({top:0,left: 0,behavior:"smooth"})}
                    />
                </div>
                {/* <div>
                    <ul>
                        <li>
                            <Link to="/">
                                Inquires
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Last
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Last
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Last
                            </Link>
                        </li>
                    </ul>
                </div> */}
            </footer>
        )
    }
}