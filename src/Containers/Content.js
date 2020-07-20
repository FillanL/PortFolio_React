import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from '../Components/Home'
import Projects from '../Components/projects'
import AdminPanel  from '../Components/admin Components/adminPanel'
import NewProject from '../Components/admin Components/newProject'
import '../Scss/App.scss'
import ErrorPage from '../Components/ErrorPage'
import projectShow from '../Components/projectShow'


export default function Content() {
    return (
        <div className="content-container">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/projects' component={Projects}/>
                <Route exact path='/projects/:id' component={projectShow}/>
                <Route exact path='/admin' component={AdminPanel}/> 
                <Route exact path='/admin/new' component={NewProject} />
                <Route exact path='*' component={ErrorPage} />
            </Switch>    
        </div>
    )
}
