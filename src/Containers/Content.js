import React from "react"
import {Switch, Route, Redirect } from "react-router-dom"

import Home from "../Components/Home"
import Projects from "../Components/projects"
import ErrorPage from "../Components/ErrorPage"
import ProjectShow from "../Components/ProjectShow"
import Login from "../admin Components/login"
import AdminPanel from "../admin Components/AdminPanel"
import Pannel from "../admin Components/pannel"
import styled from "styled-components"

function Content() {
    const isloggedin = false
    return (
        <ContentContainer>
            
            <Switch>
                {/* <Route exact path="/dummy" component={ AdminPanel }/> */}
                <Route exact path="/" component={Home}/>
                <Route exact path="/projects" component={Projects}/>
                <Route exact path="/projects/:id" component={ProjectShow}/>
                <Route exact path="/admin/login" component={Login}/>
                <Route exact path="/admin" component={AdminPanel}/>

                <Route exact path="*" component={ErrorPage} />
            </Switch>    
        </ContentContainer>
    )
}

export default Content
const ContentContainer = styled.div`
    padding-top:3rem;
    min-height:100vh;
    height:100vh;
`