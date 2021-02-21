import React,{useState} from "react"
import { Link } from "react-router-dom"
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breakpoint from "../Styles/sizing"

export default function Nav() {
    const openNAv={
        close: false
    }
    const [state, setstate] = useState(openNAv)
    let hideBar = () => {
        setstate({...openNAv,"close":!state.close})
    }

    return (
        <NavSection>
            <Holder>
                <FontAwesomeIcon onClick={()=>hideBar()} icon={["fa", "bars"]} size="2x" />
                <NavSectionTitle>
                    {"//"} Fillan
                </NavSectionTitle>
            </Holder>
            <UnorderedList hidden={state.close}>
                <NavItem>
                    <Link to="/">
                        Home
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/projects">
                        Projects
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/contact">
                        Contact
                    </Link>
                </NavItem>
            </UnorderedList>
        </NavSection>
    )
}
const NavSection = styled.nav`
    display: grid;
    grid-template-columns: 1fr;
    font-family: "Montserrat", sans-serif;
    z-index: 99999;
    position: fixed;
    background-color: rgb(255, 255, 255);
    box-shadow: 2px 2px 8px rgba(99, 99, 99, 0.788);
    width: 100vw;
    padding: 0 4%;
    grid-template-rows: 40px 150px;
    grid-template-rows: ${props => props.hidden ? "40px 150px": "40px"};
     
    ${Breakpoint.sm}{
        background-color: white;
        grid-template-columns: 25% 55% 20%;
        grid-template-rows: 40px;
    }
`

const NavItem = styled.li`
    ${Breakpoint.sm}{
        display: inline;
    }
    list-style: none;
    padding: 1rem;
    a{
        text-decoration: none;
        color: black;
        &:hover{
            color: gray;
        }
    }
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