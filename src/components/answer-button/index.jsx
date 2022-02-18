import React  from "react";
import {Button} from '@components/answer-button/styles'
import Figure from '@components/Figure'; 
import { colorThemes } from "@themes/themes";

const ButtonAnswer =({option, src,  setAnswer, answerState})=> {
    
    const { answer, sumary} = answerState 
    const checked = answer === option?true:false;
    const color = colorThemes[ checked?sumary:'base'].color 

    return (
        <Button
            color={color}
            onClick={()=>setAnswer({
                ...answerState,
                sumary: 'check',
                answer: option
            })}> 
            <Figure url={src} caption={option}/>
        </Button>
    )
}

export default ButtonAnswer;