import React from 'react'
import {Link} from 'react-router-dom'

export default function adminNav() {
    return (
            <ul>
                <li>
                    <Link exact to='/admin/new'>
                        new Projects
                    </Link>
                </li>
            </ul>
    )
}