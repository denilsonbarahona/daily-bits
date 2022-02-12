import styled from "styled-components";

export const AnswerContainer = styled.div`
    display: grid;
    gap: 1rem;
    margin-block-start: 4rem;
`

export const AnswerGrid = styled.div`
    display: grid;
    place-content:center;
    gap: .5rem;
    grid-template-columns: repeat(2, 9rem);
    margin-block-start: 1rem;
`

export const AnswerArrange= styled.div`
    padding: 1rem; 
    text-align: center;
`

export const AnswerPanel= styled.div`
    padding: 1rem; 
    text-align: center; 
    margin-block-start: 1rem;
    margin-block-end: 3rem;
    border-block-end: 1px solid var(--grey);
    min-block-size: 6rem;
    display: block;
`