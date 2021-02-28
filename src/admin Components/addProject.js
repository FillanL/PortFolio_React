import React from 'react'
import styled from "styled-components"

const addProject = () => {
    return (
        <div>
            {/* <TextHolder> */}
                <FormTitle>
                    Create New Project
                </FormTitle>
            {/* </TextHolder> */}
            <TextHolder>
                <FormLabel htmlFor={"username"}>
                    Project name
                </FormLabel>
                <TextField 
                    name={"projectName"}
                    type="text"
                    placeholder={"Ex. Minimal Logic"}
                    // value={user.password}
                    // onChange={(e)=>handleUserChanges(e)}
                />
            </TextHolder>
            <TextHolder>
                <FormLabel htmlFor={"username"}>
                    Project Description
                </FormLabel>
                <TextField 
                    name={"projectDescription"}
                    type="text"
                    placeholder={"what was the project about"}
                    // value={user.password}
                    // onChange={(e)=>handleUserChanges(e)}
                />
            </TextHolder>
            <TextHolder>
                <FormLabel htmlFor={"username"}>
                    Image Url
                </FormLabel>
                <TextField 
                    name={"imageUrl"}
                    type="text"
                    placeholder={"Ex. unsplash.com/.../"}
                    // value={user.password}
                    // onChange={(e)=>handleUserChanges(e)}
                />
            </TextHolder>
            <TextHolder>
                <FormLabel htmlFor={"username"}>
                    Project Url
                </FormLabel>
                <TextField 
                    name={"projectUrl"}
                    type="text"
                    placeholder={"Ex. pject.com/.../..."}
                    // value={user.password}
                    // onChange={(e)=>handleUserChanges(e)}
                />
            </TextHolder>
            <TextHolder>
                <FormLabel htmlFor={"username"}>
                    Github Url
                </FormLabel>
                <TextField 
                    name={"githubUrl"}
                    type="text"
                    placeholder={"Ex. github.com/.../..."}
                    // value={user.password}
                    // onChange={(e)=>handleUserChanges(e)}
                />
            </TextHolder>
            <TextHolder>
                <FormLabel htmlFor={"username"}>
                youtube_url
                </FormLabel>
                <TextField 
                    name={"youtubeUrl"}
                    type="text"
                    placeholder={"Ex. youtube.com/.../..."}
                    // value={user.password}
                    // onChange={(e)=>handleUserChanges(e)}
                />
            </TextHolder>
            <TextHolder>
                <Button hover={"true"} margin={"20px auto"} width={"30%"}>
                    Submit
                </Button>
            </TextHolder>
        </div>
    )
}

export default addProject

const TextField = styled.input`
    width: ${props => props.width ? props.width : "65%"};
    height: ${props => props.height ? props.height : "1.7rem"};
    border: 1px solid ${props => props.borderColor ? props.borderColor : '#8e9aaf' };
    outline: ${props => props.error ? null : "none"};
    border-radius: 7px;
    font-size: 0.95rem;
    padding: 12px;
    margin: auto;
`
const Button = styled.button`
    background: ${props => props.color ? props.color : 'transparent' };
    color: ${props => props.theme === 'dark' ? '#8e9aaf' : '#8e9aaf' };
    border: 1px solid ${props => props.theme === 'dark' ? '#8e9aaf' : '#8e9aaf' };
    width:  ${props => props.width ? props.width : null };
    border-radius: 10px;
    margin: 0.5em 0.5em;
    padding: 0.5rem 1rem;
    outline-style: none;
    cursor: pointer;
    box-shadow: 3px 5px 6px #ced4da;
    margin: ${props => props.margin ? props.margin : "auto" };
    ${props => props.hover ? 
        (`&:hover {
            box-shadow: 2px 3px 4px #ced4da;
        }`)
        : null };
    
`
const Form = styled.form`
    display:grid;
    grid-template-rows: 1fr;
    background-color: ${props => props.bgColor ? props.bgColor : null};
    height: ${props => props.height ? props.height : null};
    width: ${props => props.width ? props.width : null};
    padding: ${props => props.padding ? props.padding : null};
    border: 1px solid ${props => props.theme === 'dark' ? '#8e9aaf' : '#343a40' };
    margin: auto;
    border-radius:5px;
`
const TextHolder = styled.div`
    width: ${props => props.width ? props.width : "65%"};
    display:grid;
    margin: 7px auto;
    width: 100%;
    text-align: center;
`
const FormTitle = styled.h2`
    text-align:center;
    color:black;
    margin: auto;
    padding: 10px 0 30px 0 ;
`
const FormLabel = styled.label`
    text-align:left;
    padding: 0 0 0 17%;
    margin-bottom: 5px;
`