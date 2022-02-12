import React from "react";
import Menu from '../../components/menu';
import Main from '../../layouts/main'
import Page from '../../layouts/page'
import HeaderTitle from '../../components/title'
import Profile from "../../components/profile";
import Helmet from "react-helmet";

const ProfilePage =()=>{
    return (
        <Page>
            <Helmet>
                <title>DailyBits - Login</title>
                <meta name='description' content='Login to enjoy the fun'  />
            </Helmet>
            <Main>
                <HeaderTitle>Profile</HeaderTitle>
                <Profile/>
            </Main>
            <Menu/>
        </Page>
    )
}

export default ProfilePage;
