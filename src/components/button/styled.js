import styled from "styled-components";

export const StyledButton = styled.button`
 
    background-color: var(${(props)=>props.theme.color});
    color:var(--white);
    inline-size:  100%;
    block-size: 3.125rem;
    border-color: transparent;
    cursor: pointer;
    border-radius: 1rem;
    font: var(--button-button);

    &:active {
        transform:scale(0.97);
    }

    &:disabled {
        background-color: var(--disabled)
    }
`
