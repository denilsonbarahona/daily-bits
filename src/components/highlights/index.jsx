import React from  'react'
import {StyledSpan} from './styles'

const HighLight=({children, color})=>{
    return (
        <StyledSpan color={color}>{children}</StyledSpan>
    )
}


export default HighLight