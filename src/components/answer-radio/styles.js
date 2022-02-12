import styled from "styled-components";
import IconFont from '../../styles/icon-font';

export const StyledRadio = styled.input`

    ${IconFont}
    -webkit-appearance:none;
    -moz-appearance:none;
    appearance:none;
    position: relative; 
    inline-size: 1.5rem;
    block-size: 1.5rem;
    box-sizing:border-box;
    border:2px solid var(--white);
    border-radius:50%;
    transition:.2s linear ease-in-out;
    cursor: pointer;

    &:checked {
        &::after {
            content: "${props=>props.icon}";
            color: var(${props=>props.color});
            position: absolute;
            font-size: 1.15rem;  
            inset-inline-start: 50%;
            inset-inline-start: 50%;
            transform: translateX(-50%) translateY(10%);
        }
    }
    
`

export const StyledLabel = styled.label`

    cursor: pointer;
    font: var(--body1-regular);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid var(${props=>props.color});
    border-radius: 4px;
    padding: 1rem;
`

