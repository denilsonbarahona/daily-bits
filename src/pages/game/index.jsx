import React, {useContext, useEffect} from "react";
import Page from "../../layouts/page";
import Main from "../../layouts/main";
import HeaderProgress from "../../Containers/header-progress"
import QuestionAnswerContainer from "../../Containers/question"; 
import { useParams   } from 'react-router-dom';
import AppContext from "../../context";
import { GET_QUESTIONS } from "../../reducers/actions";
import { Helmet } from "react-helmet";


const Game =()=>{
    const {category} = useParams()
    const {FetchData} = useContext(AppContext)

    useEffect(()=>{            
        FetchData('questions',(DATA, DISPATCH, DISPATCH_ACTION)=>{
            const filterData = DATA.filter(item => item.attributes.category === category)
            DISPATCH(DISPATCH_ACTION(GET_QUESTIONS, filterData))
        }, 'SIMPLE')
    },[])
    

    return ( 
        <Page>
            <Helmet>
                <title>DailyBits - Learn while you play</title>
                <meta name='description' content='With dailybits you can learn about many topics and get fun at the same time'  />
            </Helmet>
            <Main>
                <HeaderProgress/>
                <QuestionAnswerContainer category={category} /> 
            </Main> 
        </Page>
    )
}

export default Game;