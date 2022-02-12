import React, {useContext} from "react";
import Progress from '../../components/progress';
import Lives from '../../components/lives';
import AppContext from '../../context'
import {HeaderContainer} from './styles'


const HeaderProgress =()=> {
    const {state} = useContext(AppContext)
    const progress = (state.step / state.questions.length ) *100

    return (
        <HeaderContainer>
            <Progress type="bar" progress={progress}/>
            <Lives/>
        </HeaderContainer>
    )
}

export default HeaderProgress
