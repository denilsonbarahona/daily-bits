import * as APPActions from './actions';

const Reducer =(state, action) => {
    switch(action.type) 
    {
        case APPActions.GET_CATEGORIES: 
            return {...state, categories: 
                    action.payload, 
                    counter: 0, 
                    step: 0, 
                    lives: 4 }
        case APPActions.GET_QUESTIONS: 
            return {...state, questions: action.payload }
        case APPActions.SET_FORWARD:  
            return {...state, 
                    step: action.payload.step, 
                    counter: action.payload.counter, 
                    lives: action.payload.lives } 
        case APPActions.SET_LIVES:
            return {...state, lives: action.payload}
        case APPActions.SET_ERROR:
            return {...state, showError: true, error: action.payload}
        default: return {...state}
    }
}

export default Reducer;