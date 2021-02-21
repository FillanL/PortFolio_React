import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
import breakpoint from '../Styles/sizing';
import Webmode from './Webmode';

function banner() {
    const imgUrl = "https://media-exp1.licdn.com/dms/image/C4E03AQGxDqFdWsIcdA/profile-displayphoto-shrink_400_400/0/1517558034783?e=1619049600&v=beta&t=adD85WbaXLxMY-5bznNFvsdpp0w4bJM7s6uClckQunI"
    return (
        <Banner>
            <Webmode/>
            <ProfilePic srcSet={imgUrl} alt="profile-picture"/>
            <UserInfo>
                <UserName>
                    Fillan Lee
                </UserName>
                <div>
                    <p style={{fontWeight:"500", fontFamily:"Montserrat, sans-serif"}}>
                    <FontAwesomeIcon style={{marginRight:"5px"}} icon={faMapMarkerAlt} size="1x" />  
                        Bronx, NY
                    </p>
                </div>
                <JobTitle>
                    Software Engineer
                </JobTitle>
                <SocialMediaContainer>
                    <SocialMediaLink color={"rgb(67,118,178)"} href="https://www.linkedin.com/in/fillanlee/">
                        <FontAwesomeIcon style={{marginRight:"15px"}} icon={['fab', 'linkedin']} size="2x" />
                    </SocialMediaLink>
                    <SocialMediaLink color="rgb(0,0,0)" href="https://github.com/fillanl">
                        <FontAwesomeIcon style={{marginRight:"15px"}} icon={['fab', 'github']} size="2x" />
                    </SocialMediaLink>
                    <SocialMediaLink color="rgb(0,0,0)" href="https://medium.com/@minimalsyntax">
                        <FontAwesomeIcon style={{marginRight:"15px"}} icon={['fab', 'medium']} size="2x" />
                    </SocialMediaLink>
                    <SocialMediaLink color="rgb(219,0,0)" href="https://www.youtube.com/channel/UCyjCBRHP2YJyapHU7wT2qyQ">
                        <FontAwesomeIcon style={{marginRight:"15px"}} icon={['fab', 'youtube']} size="2x" />
                    </SocialMediaLink>
                </SocialMediaContainer>
            </UserInfo>
        </Banner>
    )
}
export default banner

const Banner = styled.div`
    background: linear-gradient(0.20turn, lightgray, #f8f8f8, lightgray);
    padding-top: 3rem;
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1% 64% 35%;
    box-shadow: 2px 2px 8px rgba(99, 99, 99, 0.788);
`
const SocialMediaContainer = styled.div`
    padding: 5px 0;
    text-align: center;
`
const SocialMediaLink = styled.a`
    color: ${props => props.color ? props.color : "rgb(0,0,0)"};
`
const UserInfo = styled.div`
    text-align: center;
    font-family: "Montserrat, sans-serif";
`
const UserName = styled.p`
    padding: 2px 0;
    font-size: 1.5rem;
`
const JobTitle = styled.p`
    padding: 2px 0;
    color: rgb(90,89,89);
`
const ProfilePic = styled.img`
    border-radius: 100%;
    height: 90%;
    width: 210px;
    margin: auto;
`