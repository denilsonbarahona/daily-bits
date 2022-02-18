import React,{useContext} from "react";
import {ProfileContainer, ProfileName, ProfileEmail, LogOutButton, ImageProfile} from './styles'
import { SessionContext } from "@context";


const Profile =()=>{
    const {sessionState, setSessionRemoveStorage} = useContext(SessionContext)
    return (
        <ProfileContainer>
            <ImageProfile src='https://imgur.com/YEaFfF2.png' width='80' height='80' alt="francisco's profile picture"/>
            <ProfileName>{sessionState.user.username}</ProfileName>
            <ProfileEmail>{sessionState.user.email}</ProfileEmail>
            <LogOutButton onClick={setSessionRemoveStorage}>Log out</LogOutButton>
        </ProfileContainer>
    )
}


export default Profile;
