import React from "react";
import { Alert } from './styled'


const PanelAlert = ({children, theme}) =>{
    return (
        <Alert role="alertdialog" aria-label="Click next to continue" theme={theme}>{ children }</Alert>
    )
}


export default PanelAlert;