import React, {useContext} from "react";
import { GlobalStyles } from '@styles/GlobalStyles';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import Home from '@pages/Home'
import Game from '@pages/game'
import Statistics from '@pages/statistics'
import ProfilePage from '@pages/profile'
import Login from "@pages/login";
import AppContext, {SessionContext} from "@context";
import useInitialState from "@customHooks/useInitialState";
import useLocalSessionStorage from "@customHooks/useLocalSessionStorage";

const PrivateRoute =({children, isloginPath})=>{

    const {sessionState} = useContext(SessionContext)
    if(sessionState.jwt && !isloginPath ) {
        return children
    }

    if(!sessionState.jwt && isloginPath) {
        return children
    }

    if(sessionState.jwt && isloginPath) {
        return <Navigate to='/'></Navigate>
    }

    return <Navigate to='/login'></Navigate>
}



const App =()=>{
    const initialState = useInitialState();
    const sessionState = useLocalSessionStorage()

    return (
        <React.Fragment>
            <GlobalStyles/>
            <AppContext.Provider value={initialState}>
                <SessionContext.Provider value={sessionState}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={
                                    <PrivateRoute isloginPath={false}>
                                        <Home/>
                                    </PrivateRoute>} />
                            <Route path="/game/:category" element={
                                    <PrivateRoute isloginPath={false}>
                                        <Game/>
                                    </PrivateRoute>}/>
                            <Route path="/statistics" element={
                                    <PrivateRoute isloginPath={false}>
                                        <Statistics/>
                                    </PrivateRoute>} /> 
                            <Route path="/profile" element={
                                    <PrivateRoute isloginPath={false}>
                                        <ProfilePage/>
                                    </PrivateRoute>} />
                            <Route path='/login' element={
                                    <PrivateRoute isloginPath={true}>
                                        <Login/>
                                    </PrivateRoute>} />
                        </Routes>            
                    </BrowserRouter>
                </SessionContext.Provider>
            </AppContext.Provider>
        </React.Fragment>
    )
}

export default App;