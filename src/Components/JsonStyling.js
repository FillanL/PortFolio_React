import React from 'react'
import styled from 'styled-components'
import {ProjectList} from './staticPropjects'
import Webmode from './Webmode'
import breakpoint from '../Styles/sizing'


function JsonStyling() {
    const dummy = [{
        Name:"Fillan Lee",
        AboutMe:{
            Status:"Employed",
            github:"link",
            linkedin:"link",
            youTube:"link",
            Medium:"link"
        },
        Projects:ProjectList,
        Experience:[
            {
                "company":"Infosys LTD",
                "role":"Software Engineer",
                "primary_tech":["java","angularJS"],
                "description":"did some cool stuff"
            }
        ],
        Education:[
        {
            school:"flatiron",
            state: "New York, NY",
            study:"Software Engineering"
        },
        {
            school:"Youngstown State",
            state: "youngstown, OH",
            study:"Accounting"
        }
    ]
    }]
    return (
        <JsonDataContainer>
            <NavPadding/>
            <Webmode />
            <JsonString>{JSON.stringify(dummy, undefined, 3)}</JsonString>
        </JsonDataContainer>
    )
}

export default JsonStyling

const JsonDataContainer = styled.div`
    background-color: lightgray;
`
const JsonString = styled.pre`
    padding: 0 20px;
    line-height:1.7;
    font-size: 14px;
    color: black;
    white-space: pre-wrap;
    word-wrap: break-word;
`
const NavPadding = styled.div`
    height: 3.5rem;
`

