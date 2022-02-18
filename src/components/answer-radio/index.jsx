import React from "react";
import {icons} from '@utils/set-icons'
import {StyledRadio, StyledLabel} from './styles';  
import { iconThemes, colorThemes } from "@themes/themes.js";

const RadioAnswer =( {option,  setAnswer, answerState})=>{

    const {answer, sumary} = answerState; 
    const checked = answer === option?true:false;
    const color = colorThemes[ checked?sumary:'base'].color
    const icon = iconThemes[sumary]
 
    return ( 
            <StyledLabel color={color}>
                {option}
                <StyledRadio 
                             onChange={()=>setAnswer({
                                ...answerState,
                                sumary: 'check',
                                answer: option
                             })} 
                             type='radio'
                             name='answers' 
                             color={color}
                             icon={icons[icon]}/>
            </StyledLabel> 
    )
}


export default RadioAnswer;
