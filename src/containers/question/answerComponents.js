import RadioAnswer from '../../components/answer-radio';
import ArrangeItem from "../../components/answer-arrange";
import ButtonAnswer from '../../components/answer-button';
import {AnswerContainer, AnswerGrid, AnswerArrange, AnswerPanel } from './styles.js'

export const AnswerComponent = {
    'option': {
        'Layout': AnswerContainer,
        'Component': RadioAnswer,
    },
    'button':{
        'Layout': AnswerGrid,
        'Component': ButtonAnswer 
    },
    'arrange':{
        'Layout': AnswerArrange,
        'Partner': AnswerPanel,
        'Component': ArrangeItem 
    }
}
