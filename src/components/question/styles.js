import styled from "styled-components";
import {figure} from '../../styles/figures';


export const Figure = styled.figure`
    max-block-size:10rem;
    max-inline-size: 4.65rem;
    ${figure}
`
export const Image = styled.img`
    block-size:100%;
    inline-size:100%;
    vertical-align:middle;
`
export const Header = styled.h1`
    font:var(--headline-headline2);
    color: var(--white);
`
export const QuestionConstainer = styled.div`
    display: flex;
    align-items:center;
    gap: 1rem;
`