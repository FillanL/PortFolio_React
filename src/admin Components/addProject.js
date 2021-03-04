import React, {useState} from "react"
import styled from "styled-components"
import ProjectServices from "../Services/projectServices";

const AddProject = () => {
    const isHtml = (url) =>{
        const urlLength = url.length
        const dotCom = url.substring(urlLength-4,urlLength)
        const http = url.substring(0,7)

        if(dotCom === ".com" && http === "http://") return true
        return false
    }
    const isEmpty = () =>{
        const empty = newProject.project_name === ""|| 
        newProject.project_description === "" || 
        newProject.image_url === "" || 
        newProject.project_url === "" || 
        newProject.github_url === "" || 
        newProject.youtube_url === "";
        if(empty) return true
        return false
    }
    const initialState ={
        project_name:"", 
        project_description:"", 
        image_url:"", 
        project_url:"", 
        github_url:"", 
        youtube_url:""
    }
    const errorState ={
        error:false,
        message:""
    }
    const handleProjectChange=(e)=>{
        setnewProject({...newProject, [e.target.name]: e.target.value })
    }
    const handleSetError=(message)=>{
        setError({error: true, message})
    }
    const handleFormSubmit = async(e) =>{
        e.preventDefault();

        if(isEmpty())return handleSetError("emply feilds")
        if(!!!isHtml(newProject.image_url)) return handleSetError( "error img")
        if(!!!isHtml(newProject.project_url)) return handleSetError("error prj")
        if(!!!isHtml(newProject.github_url)) return handleSetError( "error github")
        if(!!!isHtml(newProject.youtube_url)) return handleSetError( "error yt")
        await ProjectServices.createProject(newProject);
    }
    const [newProject, setnewProject] = useState(initialState)
    const [error, setError] = useState(errorState)

    return (
        <div>
            {/* <TextHolder> */}
                <FormTitle>
                    Create New Project
                </FormTitle>
            {/* </TextHolder> */}
            {error ? error.message : null}
            <TextHolder>
                <FormLabel htmlFor={"username"}>
                    Project name
                </FormLabel>
                <TextField 
                    name={"project_name"}
                    type="text"
                    placeholder={"Ex. Minimal Logic"}
                    value={newProject.project_name}
                    onChange={(e)=>handleProjectChange(e)}
                />
            </TextHolder>
            <TextHolder>
                <FormLabel htmlFor={"username"}>
                    Project Description
                </FormLabel>
                <TextField 
                    name={"project_description"}
                    type="text"
                    placeholder={"what was the project about"}
                    value={newProject.project_description}
                    onChange={(e)=>handleProjectChange(e)}
                />
            </TextHolder>
            <TextHolder>
                <FormLabel htmlFor={"username"}>
                    Image Url
                </FormLabel>
                <TextField 
                    name={"image_url"}
                    type="text"
                    placeholder={"Ex. unsplash.com/.../"}
                    value={newProject.image_url}
                    onChange={(e)=>handleProjectChange(e)}
                />
            </TextHolder>
            <TextHolder>
                <FormLabel htmlFor={"username"}>
                    Project Url
                </FormLabel>
                <TextField 
                    name={"project_url"}
                    type="text"
                    placeholder={"Ex. pject.com/.../..."}
                    value={newProject.project_url}
                    onChange={(e)=>handleProjectChange(e)}
                />
            </TextHolder>
            <TextHolder>
                <FormLabel htmlFor={"username"}>
                    Github Url
                </FormLabel>
                <TextField 
                    name={"github_url"}
                    type="text"
                    placeholder={"Ex. github.com/.../..."}
                    value={newProject.github_url}
                    onChange={(e)=>handleProjectChange(e)}
                />
            </TextHolder>
            <TextHolder>
                <FormLabel htmlFor={"username"}>
                youtube_url
                </FormLabel>
                <TextField 
                    name={"youtube_url"}
                    type="text"
                    placeholder={"Ex. youtube.com/.../..."}
                    value={newProject.youtube_url}
                    onChange={(e)=>handleProjectChange(e)}
                />
            </TextHolder>
            <TextHolder>
                <Button hover={"true"} margin={"20px auto"} width={"30%"} onClick={(e)=>handleFormSubmit(e)}>
                    Submit
                </Button>
            </TextHolder>
        </div>
    )
}

export default AddProject

const TextField = styled.input`
    width: ${props => props.width ? props.width : "65%"};
    height: ${props => props.height ? props.height : "1.7rem"};
    border: 1px solid ${props => props.borderColor ? props.borderColor : "#8e9aaf" };
    outline: ${props => props.error ? null : "none"};
    border-radius: 7px;
    font-size: 0.95rem;
    padding: 12px;
    margin: auto;
`
const Button = styled.button`
    background: ${props => props.color ? props.color : "transparent" };
    color: ${props => props.theme === "dark" ? "#8e9aaf" : "#8e9aaf" };
    border: 1px solid ${props => props.theme === "dark" ? "#8e9aaf" : "#8e9aaf" };
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
    border: 1px solid ${props => props.theme === "dark" ? "#8e9aaf" : "#343a40" };
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