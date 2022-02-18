import React, {useContext, useRef} from 'react';
import {Form, Input, Label, Button, Logo} from './styles';
import AppContext, {SessionContext} from '@context'; 
import { useNavigate } from 'react-router-dom';

const LoginForm=()=>{
    
    const ref = useRef(null)
    const navigate = useNavigate()
    const {setSessionStorage} = useContext(SessionContext)
    const {FetchData} = useContext(AppContext) 

    const onSubmitForm=(event)=>{
        event.preventDefault();
        const formData = new FormData(ref.current)
        const email = formData.get('email')
        const password = formData.get('password')

        FetchData('auth/local',(DATA)=>{
            if(DATA.jwt){
                setSessionStorage(DATA)
                navigate('/')
            }
        },'COMPLEX', {identifier: email, password})
    }

    return (
        <Form ref={ref} onSubmit={onSubmitForm}>
            <Logo src='https://imgur.com/g72llIl.png' alt='daily-bits' width='80' height='80' />
            <Label> Email 
                <br/>
                <Input name='email' defaultValue='fransisco.javier@gmail.com' type='email' placeholder='your email here' required />
            </Label>
            <Label> Password 
                <br/>
                <Input name='password' defaultValue='123456789' type='password' placeholder='your password here' required />
            </Label>

            <Button>Login</Button>
        </Form>
    )
}

export default LoginForm;