import React,{useState} from 'react'
import styled from 'styled-components'

const Webmode = ({view}) =>{
    const JSONView = "jsonn"
    const STYLEDView = "styled"
    const styleMode = localStorage.getItem("styleMode") ? localStorage.getItem("styleMode") : null;
    const initalMode = styleMode ?? STYLEDView
    const [mode, setMode] = useState(initalMode)
    const handleViewSelection = (view) =>{
        setMode(view)
        localStorage.setItem("styleMode", view)
    }
    return (
        <WebsiteMode>
            <ViewButtonContainer>
                <Button onClick={()=>handleViewSelection(JSONView)} value={JSONView} active={mode === JSONView ? true : false} >
                    JSON View
                </Button>
                <Button onClick={()=>handleViewSelection(STYLEDView)} value={STYLEDView} active={mode === STYLEDView ? true: false}>
                    Styled View
                </Button>
            </ViewButtonContainer>
        </WebsiteMode>
    )
}

export default Webmode

const WebsiteMode = styled.div`
    padding-right:20px;
`
const ViewButtonContainer = styled.div`
    text-align:right;
`
const Button = styled.span`
    width:100px;
    background-color:${props => props.active ? "gray": "white"};
    cursor: pointer;
    border: 1px black solid;
    padding: 2px 3px;
    font-size:12px
`