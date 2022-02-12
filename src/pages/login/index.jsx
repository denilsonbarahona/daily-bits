import React from 'react';
import Main from '../../layouts/main'
import Page from '../../layouts/page'
import LoginForm from '../../components/login-form';
import HeaderTitle from '../../components/title';
import Helmet from 'react-helmet';

const Login =()=>{
    return (
        <Page>
            <Helmet>
                <title>DailyBits - Login</title>
                <meta name='description' content='Login to enjoy the fun'  />
            </Helmet>
            <Main>
                <HeaderTitle>Login</HeaderTitle>
                <LoginForm/>
            </Main> 
        </Page>
    )
}


export default Login;