import styled from 'styled-components'

export const SectionConatainer = styled.div`
    width: 100%;
    height: ${props => props.height ? props.height : "auto"};
    padding: ${props => props.padding ? props.padding : "25px 5%"};
`
export const SectionTitle = styled.h2`
    font-family: Montserrat, sans-serif;
    padding: ${ props => props.padding ? props.padding : "10px 0"};
    color: ${ props => props.color ? props.color : "rgb(124, 144, 160)"};
`
export const Divider = styled.div`
    border-radius: 30px;
    margin: 20px auto;
    height: 1px;
    width: 30%;
    background-color: black;
`