import styled, {css} from "styled-components";

export const ProgressContainer = styled.div`
    max-block-size: 6rem;
`

export const BarSvg = styled.svg`
    block-size: 0.75rem;
    margin: 0;
    padding: 0;
    inline-size: 100%;   
`

export const Rect = styled.rect`
    block-size: inherit;
    inline-size: ${props=>props.inline};
    fill: var(${(props)=>props.fill});
`

export const CircleSvg = styled.svg`
    margin: 0;
    padding: 0;
    inline-size: 6rem;
    block-size: 6rem; 
`
const circle = css`
    transition: 0.35s stroke-dashoffset;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    stroke-width: 10;
    fill:transparent;
    stroke-linecap: round;  
`

export const CircleInner = styled.circle`
    ${circle}
    stroke:var(--green); 
`

export const CircleOuter = styled.circle`
    ${circle}
    stroke:#DDDDDD; 
`
