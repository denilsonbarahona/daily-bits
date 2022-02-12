import { useState } from "react";

const useLocalSessionStorage =()=>{
    const [sessionState, setSessionState] = useState(()=>{
        try {
            const item = window.sessionStorage.getItem('us_session')
            return item !== null ? JSON.parse(item) : ''
          } catch { return '' }
    })
 
    const setSessionStorage = value => {
        try {
          window.sessionStorage.setItem('us_session', JSON.stringify(value))
          setSessionState(value)
        } catch (e) { console.error(e) }
    }

    const setSessionRemoveStorage = _ =>{ 
        try {
            window.sessionStorage.removeItem('us_session')
            setSessionState('')
        } catch (e) { }
    }

    return {sessionState, setSessionStorage, setSessionRemoveStorage}
}

export default useLocalSessionStorage;

