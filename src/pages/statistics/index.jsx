import React from "react";
import Menu from '../../components/menu';
import Main from '../../layouts/main'
import Page from '../../layouts/page'
import Sumary from "../../containers/sumary";
import HeaderTitle from '../../components/title'
import Helmet from "react-helmet";

const Statistics =()=>{
    return (
        <Page>
            <Helmet>
                <title>DailyBits - statistics</title>
                <meta name='description' content='You can see your progress of learning'  />
            </Helmet>
            <Main>
                <HeaderTitle>Estadisticas</HeaderTitle>
                <Sumary/>
            </Main>
            <Menu/>
        </Page>
    )
}

export default Statistics;
