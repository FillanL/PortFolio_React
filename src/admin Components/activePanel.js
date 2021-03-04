import React from 'react'
import AddProject from './addProject'
import Dashboard from './dashboard'
import ViewProjects from './viewProjects'

const activePanel = ({componentShowing}) => {
    switch (componentShowing) {
        case "default":
            return(<Dashboard/>)
        case "add":
            return(<AddProject/>)
        case "viewAll":
                return(<ViewProjects/>)
        default:
            return(<Dashboard />)
            // break;
    }
}

export default activePanel
