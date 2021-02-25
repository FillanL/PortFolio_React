import React from 'react';
import { Redirect } from 'react-router-dom';
// import styled from 'styled-components'

const AdminPanel = ({props})=> {
    console.log("hererer")
    const isloggedin = true
    if(isloggedin === false) return <Redirect to={{pathname: "/admin/login"}}/> 
    return (
        <div>
ghgj
        </div>
    )
}
export default AdminPanel