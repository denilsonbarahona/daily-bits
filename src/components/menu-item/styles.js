import styled from "styled-components";
import {Link} from 'react-router-dom';

export const MenuItemAnchor = styled(Link)`
    display:grid;
    place-content:center; 
    cursor: pointer;
    color:var(${props=>props.color});
    font:var(--body2-regular);
    padding-block-start: 0.75rem;
    padding-block-end: 0.75rem;
    text-decoration:none;    
`

export const MenuItemList = styled.li`
    list-style:none;
    margin: 0;
    flex:1;`


