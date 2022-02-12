import React from "react";
import MenuItem from '../menu-item'
import Icon from '../icons';
import { useLocation } from "react-router-dom";
import {StyledList, NavStyled} from './style';


const Menu =()=>{
    const location = useLocation()

    return (
        <NavStyled aria-label="main menu">
            <StyledList>
                <MenuItem  to="/" isCurrent={'/'===location.pathname}>
                    <Icon iconType="home"/>
                    Home
                </MenuItem>
                <MenuItem to="/statistics" isCurrent={'/statistics'===location.pathname}>
                    <Icon iconType="activity"/>
                    Statistics
                </MenuItem>
                <MenuItem to="/profile" isCurrent={'/profile'===location.pathname}>
                    <Icon iconType="user"/>
                    Profile
                </MenuItem>
            </StyledList>
        </NavStyled>
    )
}


export default Menu;