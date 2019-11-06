import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from '../Components/Home'
import Projects from '../Components/projects'
import '../Scss/App.scss'


export default function Content() {
    return (
        <div className="content-container">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/projects' component={Projects}/>                
            </Switch>
            
        </div>
    )
}