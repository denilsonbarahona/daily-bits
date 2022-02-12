import React,{useContext, useEffect} from "react";
import CategoriesContainer from '../../Containers/categories';
import Menu from '../../components/menu';
import Main from '../../layouts/main'
import Page from '../../layouts/page'
import AppContext from "../../context";
import { GET_CATEGORIES } from "../../reducers/actions";
import Helmet from "react-helmet";
import {Title} from './styles'

const Home =() => {

    const {FetchData} = useContext(AppContext)
    useEffect(()=>{            
        FetchData('categories',(DATA, DISPATCH, DISPATCH_ACTION)=>{
            DISPATCH(DISPATCH_ACTION(GET_CATEGORIES, DATA))
        },'SIMPLE')
    },[])
    
    return (
        <Page>
            <Helmet>
                <title>DailyBits - Learn while you play</title>
                <meta name='description' content='With dailybits you can learn about many topics and get fun at the same time'  />
            </Helmet>
            <Main>
                <Title>Practice your knowledge in the category you prefer.</Title>
                <CategoriesContainer /> 
            </Main>
            <Menu/>
        </Page>
    )
}

export default Home;