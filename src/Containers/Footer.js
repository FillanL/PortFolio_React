import React, {  } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareUp } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
import { SectionTitle } from '../Styles';
import Breakpoint from '../Styles/sizing'



// import '../Scss/footer.scss'
const Footer =()=> {
    return (
        <FooterSection>
            <SectionTitle color={"black"}>
                Fillan L.
            </SectionTitle>
            <div>
                <FooterUnorderedList>
                    <FooterItem>
                        <Link to="/">
                            Home
                        </Link>
                    </FooterItem>
                    <FooterItem>
                        <Link to="/projects">
                            Projects
                        </Link>
                    </FooterItem>
                    <FooterItem>
                        <Link to="/">
                            Contact
                        </Link>
                    </FooterItem>
                </FooterUnorderedList>
            </div>

            <div>
                <FooterUnorderedList width={"50%"} display={"grid"}>
                    <FooterItem>
                        <Link to="/">
                            Linkedin
                        </Link>
                    </FooterItem>
                    <FooterItem>
                        <Link to="/">
                            Blog
                        </Link>
                    </FooterItem>
                    <FooterItem>
                        <Link to="/">
                            Github
                        </Link>
                    </FooterItem>
                    <FooterItem>
                        <Link to="/">
                            YouTube
                        </Link>
                    </FooterItem>
                </FooterUnorderedList>
            </div>
            <div id="scrollIconContainer">
                <FontAwesomeIcon 
                    icon={faCaretSquareUp}
                    size="3x"
                    onClick={()=> window.scrollTo({top:0,left: 0,behavior:"smooth"})}
                />
            </div>
        </FooterSection>
    )
}
export default Footer
const FooterSection = styled.footer`
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(to left,white, rgb(124, 144, 160));
    color: white;
    display: grid;
    grid-template-rows:  1fr;
    grid-template-columns:  1fr;
    padding: 2% 3%;
    color: white;
`
const FooterItem = styled.li`

    list-style: none;
    /* padding: 1rem; */
    a{
        text-decoration: none;
        color: black;
        &:hover{
            color: gray;
        }
    }
`

const FooterUnorderedList = styled.ul`
width:400px;
    margin:auto;
    grid-template-columns:repeat(4,1fr);
    list-style: none;
    display:inline;
    ${Breakpoint.sm}{
        width: ${props => props.width ? props.width : null};
        display: ${props => props.display ? props.display : "inline"};
    }
  `