import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from '../Components/Home'
import Projects from '../Components/projects'
import ErrorPage from '../Components/ErrorPage'
import ProjectShow from '../Components/ProjectShow'

function Content() {
    return (
        <div className="content-container">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/projects' component={Projects}/>
                <Route exact path='/projects/:id' component={ProjectShow}/>
                {/* <Route exact path='/admin' component={AdminPanel}/>  */}
                {/* <Route exact path='/admin/new' component={NewProject} /> */}
                <Route exact path='*' component={ErrorPage} />
            </Switch>    
        </div>
    )
}

export default Content