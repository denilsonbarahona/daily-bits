import React, {useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Question from "@components/question";
import Answers from '@containers/answers';
import AnswerQuestionLayout from "@layouts/answer-question";
import AppContext from "@context"; 
import { AnswerComponent } from "./answerComponents";

const QuestionAnswerContainer =({category}) =>{
 
    const {state} = useContext(AppContext)
    const navigate = useNavigate()
  
    useEffect(()=>{
        if(state.step > 0 && (state.questions.length <= state.step || state.lives === 0) ) {
           const progress = (state.counter / state.questions.length)*100
           navigate('/',{ state: { progress, category } } )
        }
    },[state.step])

    if( state?.questions.length  && state.questions.length > state.step) { 

        const format = state?.questions[state.step]?.attributes?.format; 
        const {attributes:{options, question, avatar} } = state.questions[state.step];
        const items = JSON.parse(options)
        
        const  AnswerWithData = Answers({...AnswerComponent[format], items} )
        
        return (
            <AnswerQuestionLayout>
                <Question question={question} avatar={avatar}/>
                <AnswerWithData  />
            </AnswerQuestionLayout>
        )
    }
    
    return (<></>)

}


export default QuestionAnswerContainer;