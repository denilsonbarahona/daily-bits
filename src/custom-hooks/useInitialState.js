import {useReducer} from "react";
import { InitialState } from "@reducers/initial-state";
import DO_REQUEST, {COMPLEX_REQUEST} from "../api/API";
import { DISPATCH_ACTION , SET_FORWARD} from "@reducers/actions";
import Reducer from "@reducers";


const SimpleRequest = async(SECTION)=>{
    const result =  await DO_REQUEST(SECTION);
    return result;
}

const ComplexRequest = async(SECTION, BODY)=>{
    const result =  await COMPLEX_REQUEST(SECTION, 'POST', BODY);
    return result;
}

const useInitialState =()=>{
    const [state, dispatch] = useReducer(Reducer, InitialState);

    const FetchData = async(SECTION, CALLBACK, TYPE, BODY)=>{
        let result;
        if(TYPE==='SIMPLE'){
            result = await SimpleRequest(SECTION)
        }else {
            result = await ComplexRequest(SECTION, BODY)
        }

        if(!result.error) {
            CALLBACK(result.data, dispatch, DISPATCH_ACTION )
        }
    }

    const Foward =(step, counter, lives)=>{
        dispatch(DISPATCH_ACTION(SET_FORWARD, {step, counter, lives}))
    }

    return {
        state,
        FetchData,  
        Foward
    }
}

export default useInitialState