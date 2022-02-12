import React from "react";
import {Figure, Image, Header, QuestionConstainer} from './styles'

const Question = ({question, avatar})=> {

    return (
        <QuestionConstainer>
            <Figure>
                <Image src={avatar} alt='question avatar' height='160' width='74.4'></Image>
            </Figure>
            <Header>{question}</Header>
        </QuestionConstainer>
    )
}


export default Question;