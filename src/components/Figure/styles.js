import {figure, figcaption} from '../../styles/figures';
import styled from 'styled-components';

export const StyledFigure = styled.figure`
    ${figure}
    box-sizing: border-box;
    inline-size: ${props=>props.widthSize};
    block-size: ${props=>props.heightSize};
    display: grid;
    gap: 2rem;
    place-content: center; 
`

export const Image = styled.img`
    inline-size: 5rem;
    block-size: 5rem;
    vertical-align: middle;
    margin: 0; 
    object-fit: cover; 
`

export const Caption = styled.figcaption`
    ${figcaption} 
    font: var(--body1-bold);
    margin:0;
`
