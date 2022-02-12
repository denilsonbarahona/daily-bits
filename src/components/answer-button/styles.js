import styled from "styled-components"; 

export const Button = styled.button`

    background-color: var(--black);
    color: var(--white);
    font: var(--body1-regular);
    cursor: pointer;
    padding: .5rem;
    border: 1px solid var(${props=>props.color});
    border-radius: 1rem;
    box-shadow: 0 2px 0 0 var(${props=>props.color});
    margin: 0.25rem; 

    &:active {
        transform: scale(.9);
    }
`
