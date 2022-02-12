import React from "react";
import {StyledButton} from './styled';

const Button =({children, theme, isDisabled, onClick})=>{
 
    return (
        <StyledButton onClick={onClick} disabled={isDisabled} theme={theme}>
            {children}
        </StyledButton>
    )
}


export default Button;