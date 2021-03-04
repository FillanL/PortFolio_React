import React,{ useState } from "react";
import {useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Breakpoint from "../Styles/sizing";
import Auth from "../Services/authServices";

const PannelNav = ({setComponent}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const handleLogoutUser = async()=>{
        dispatch(Auth.logOutUser(history))
    }
    return (
        <NavContainer>
            <UnorderedList>
                <NavItem onClick={()=>setComponent("default")}>Dashboard</NavItem>
                <NavItem onClick={()=>setComponent("add")}>Add Project</NavItem>
                <NavItem onClick={()=>setComponent("viewAll")}>View Projects</NavItem>
                <NavItem logout={true}>
                    <Logoutbtn onClick={ ()=>handleLogoutUser() }>
                        log out
                    </Logoutbtn>
                </NavItem>
            </UnorderedList>
        </NavContainer>
    )
}

export default PannelNav

const NavContainer = styled.div`
    padding-top: 125px;
    border-top: 1px black solid;
    border-right: 1px black solid;
    background-color: rgb(10, 60, 10);
    height: 100vh;
     
    ${Breakpoint.sm}{
        background-color: rgb(230, 230, 230);
        grid-template-columns: 25% 55% 20%;
        grid-template-rows: 40px;
    }
`

const NavItem = styled.li`
    /* ${Breakpoint.sm}{
    } */
    list-style: none;
    border-top: 1px black solid;
    text-align:center;
    margin: auto;
    padding: 15px;
    &:hover{
        cursor: ${props => props.logout ? null : "pointer"};
        background-color: ${props => props.logout ? null : "gray"};
    }
    ${props => props.logout ? "padding-top: 250px;":null};
`

const UnorderedList = styled.ul`
    ${Breakpoint.sm}{
        display: inline;
    }
    display: inline;
    list-style: none;
    margin:auto;
    display: ${props => props.hidden ? "": "none"};
`
const Holder= styled.div`
    display:grid;
    grid-template-columns: 5% 95%;
    svg{
        padding-top: 8px;
        color: rgb(124, 144, 160);
    }
    ${Breakpoint.sm}{
        grid-template-columns: 100%;
        margin: auto;
        display:inline;
        svg{
            display:none;
        }
    }
`
export const NavSectionTitle = styled.h2`
    font-family: Montserrat, sans-serif;
    padding: ${ props => props.padding ? props.padding : "10px 0"};
    padding-right: 50px;
    color: rgb(124, 144, 160);
    text-align: center;

    ${Breakpoint.sm}{
        padding:0;
        padding-right: 0px;
        text-align: left;
    }
`
const Logoutbtn = styled.div`
    border: 1px black solid;
    padding: 10px;
    background-color: black;
    color: white;
    &:hover{
        cursor: pointer;
    }
`