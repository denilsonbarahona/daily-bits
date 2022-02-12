import styled from "styled-components";

export const CircularContainer = styled.div`
    position: relative;
    display:grid;
    place-items:center;
`
export const Image = styled.img`
    position:absolute; 
    inline-size: 3.5rem;
    block-size: 3.5rem;
`
export const Container = styled.div`
    inline-size: 6rem;
    text-align:center;
    font: var(--body1-bold); 
    color:var(--white);
    cursor: pointer;

    &>*{
        margin: 0;
        padding: 0;
    }

    &:first-child{ 
        grid-column-start: 1;
        grid-column-end: -1;
    }

`