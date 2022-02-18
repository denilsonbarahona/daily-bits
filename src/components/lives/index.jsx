import React from "react";
import Icon from "@components/icons";
import {LivesContainer, LivesCounter} from './styles'

import { useContext } from "react";
import AppContext from "@context";

const Lives = ()=>{

    const {state} = useContext(AppContext);

    return (
        <LivesContainer>
            <Icon iconType="heart"/>
            <LivesCounter>{state.lives}</LivesCounter>
        </LivesContainer>
    )
}

export default Lives;