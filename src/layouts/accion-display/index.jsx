import React,{useContext} from "react";
import Button from '../../components/button'
import PanelAlert from '../../Containers/alert'
import NotificationTitle from '../../Containers/alert/notification';
import AppContext from "../../context"; 
import {colorThemes, alertThemes} from '../../themes/themes'; 

const ActionDisplay =({answerState, setAnswer})=>{

    const {state, Foward} = useContext(AppContext)
    const {sumary, answer} = answerState

    const Check=()=>{
        if(answer === state.questions[state.step].attributes.answers){
          setAnswer({ ...answerState, sumary: 'success'})
        }else{
            setAnswer({ ...answerState, sumary: 'fail' }) 
        }
    }

    const Forward =()=>{
        const add = answerState.sumary === 'success'? 1: 0
        const less = answerState.sumary === 'fail'?1: 0

        setAnswer('')
        Foward(state.step+1, state.counter+add, state.lives - less)
    }

    return (
        <PanelAlert theme={alertThemes[sumary]}>
             { !['base','check'].includes(sumary) && 

                    <NotificationTitle theme={alertThemes[sumary]}>
                       {sumary === 'success'?'Good Job!':'Wrong Answer'}
                    </NotificationTitle> }

            <Button onClick={ ['success','fail'].includes(sumary)
                                    ?Forward
                                    :Check } 

                    isDisabled={ sumary === 'base' } 
                    theme={colorThemes[ sumary === 'check'?'base_btn':sumary ]}>

                    { ['success','fail'].includes(sumary)
                            ?'Next'
                            :'Evaluate'} 
            </Button>
        </PanelAlert>
    )
}

export default ActionDisplay 