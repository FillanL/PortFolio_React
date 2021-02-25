import React,{useState} from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'


const Login = () => {
    const isloggedin = true
    
    const handleSignin=(e)=>{
        e.preventDefault();
    }
    const handleUserChanges = (e)=>{
        setUser({...user, [e.target.name]: e.target.value })
    }
    const handleFormSubmit = (e)=>{
        
    }
    const initialUserState = {
        email:"",
        password:"",
    }
    const initialMatchingPassword = {
        rePassword: ""
    }
    const [user, setUser] = useState(initialUserState)
    console.log("login")
    
    if(isloggedin) return <Redirect to={{pathname: "/admin"}}/>

    return (
        <ComponentContainer padding={"10% 0 0 0"} height={"100vh"}>
            <Form onSubmit={(e)=>handleSignin(e)} bgColor={"#faf9f9"} width="40%" padding={"30px"}>
                <FormTitle>
                    Sign In
                </FormTitle>

                <TextHolder>
                    <FormLabel for={"username"}>
                        Email
                    </FormLabel>
                    <TextField 
                        name={"email"}
                        placeholder={"email"} 
                        value={user.email}
                        onChange={(e)=>handleUserChanges(e)}
                    />
                </TextHolder>
                <TextHolder>
                    <FormLabel for={"username"}>
                        Password
                    </FormLabel>
                    <TextField 
                        name={"password"}
                        type="password"
                        placeholder={"password"}
                        value={user.password}
                        onChange={(e)=>handleUserChanges(e)}
                    />
                </TextHolder>
                
                <Button hover={"true"} margin={"20px auto"} width={"50%"}>
                    Submit
                </Button>
            </Form>
        </ComponentContainer>
    )
}

export default Login

const ComponentContainer = styled.div`
    background-color: ${props => props.theme === 'dark' ? '#22223b': '#faf9f9'};
    color: ${props => props.theme === 'dark' ? '#faf9f9' : '#22223b'};
    height: 3rem;
    width: 100vw;
    max-width:100vw;
    height: ${props => props.height ? props.height : null};
    padding: ${props => props.padding ? props.padding : "10px"};
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
const TextHolder = styled.div`
    width: ${props => props.width ? props.width : "65%"};
    display:grid;
    margin: 7px auto;
    width: 100%;
    text-align: center;
`
const FormTitle = styled.h1`
    color:black;
    margin: auto;
    padding: 10px 0 30px 0 ;
`
const FormLabel = styled.label`
    text-align:left;
    padding: 0 0 0 17%;
    margin-bottom: 5px;
`