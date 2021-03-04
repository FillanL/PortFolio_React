import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import ActivePanel from "./activePanel";
import PannelNav from "./pannelNav";
import styled from "styled-components"

const AdminPanel = ({props})=> {
    const isloggedin = useSelector(state => state.user.isLoggedIn )
    const [component, setcomponent] = useState("default")
    console.log(component, isloggedin)
    if(isloggedin === false) return <Redirect to={{pathname: "/admin/login"}}/> 
    return (
        <PanelContainer>
            <PannelNav setComponent={setcomponent} />
            <ActivePanel componentShowing={component} />
        </PanelContainer>
    )
}
export default AdminPanel

const PanelContainer = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;

`