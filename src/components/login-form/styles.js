import styled from 'styled-components';

export const Form = styled.form` 
    display: grid;
    color: var(--white);
    gap: 2rem;
    font: var(--subtitle-subtitle1);
`
export const Input = styled.input`
    border-radius: .25rem;
    block-size: 3rem;
    font: var(--body1-regular);
    padding: 1rem;
    box-sizing: border-box;
    inline-size: 100%;
`

export const Label = styled.label`
    inline-size: 100%; 
`

export const Button = styled.button`
    background: var(--red);
    border: none;
    padding: 1rem;
    border-radius: .25rem;
    font: var(--button-button);
    color: var(--white);
    cursor: pointer;
    
    &:active{
        transform: scale(.95);
    }
`

export const Logo = styled.img`
    background: var(--purple);
    padding: 1rem;
    inline-size: 5rem;
    block-size: 5rem;
    object-fit: contain;
    border-radius: 30px;
    margin: 0 auto;
`