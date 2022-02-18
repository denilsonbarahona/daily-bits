import React, { useRef} from 'react';
import {Button} from '@components/answer-button/styles'

const ArrangeItem =({option, partnerRef, setAnswer, answerState})=>{
    const ref = useRef(null)
 
    const onClick=(event)=>{
        if(partnerRef.current === event.target.parentElement) {
            partnerRef.current.parentElement.append(event.target)
            setAnswer({
                ...answerState,
                answer: answerState.answer.replace(option,'')
            })
        }else {
            partnerRef.current.append(event.target)
            setAnswer({
                ...answerState,
                sumary:'check',
                answer: `${answerState.answer}${option}`
            })
        } 
    } 
 
    return (
        <Button aria-label='click or enter to select this option' ref={ref} onClick={onClick} color='--white'>{option}</Button>
    )
}


export default  ArrangeItem 