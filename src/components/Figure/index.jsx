import React from "react";
import {StyledFigure, Image, Caption} from './styles'

const Figure =({url, caption})=>{
    
    return (
        <StyledFigure 
            widthSize='8rem' 
            heightSize='8rem'>
                <Image 
                    src={url} 
                    alt={caption}
                    width='128'
                    height='128'/>
                <Caption>{caption}</Caption>
        </StyledFigure>
    )
}

export default Figure;