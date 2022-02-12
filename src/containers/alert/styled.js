import styled from "styled-components";

export const Alert = styled.div` 
    padding: 1rem;
    inline-size: 100%;
    background-color: var(${(props)=>props.theme.backgroundColor});
    box-sizing:border-box;
    position: fixed;
    bottom: 0;
    max-inline-size: 48rem;
    margin-inline-start: -1rem; 

    &>*{
        margin:0;
    }
`;


export const Notification = styled.h2`
    font: var(--body1-bold);
    margin-bottom: 1rem;
    color: var(${props=>props.theme.color});
    text-align: start;
    

`