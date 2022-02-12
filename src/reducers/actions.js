export const GET_QUESTIONS   = '[GET] QUESTIONS'; 
export const GET_CATEGORIES  = '[GET] CATEGORIES';
export const SET_FORWARD     = '[SET] FOWARD';
export const SET_ERROR       = '[SET] ERROR';
export const SET_LIVES       = '[SET] REDUCE-LIVES';

export const DISPATCH_ACTION =(type_, payload_) => ({
    type: type_,
    payload: payload_,
})

