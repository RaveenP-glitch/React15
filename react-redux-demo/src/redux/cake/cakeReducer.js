import { BUY_CAKE } from "./cakeTypes"

const initialState = {
    numOfCakes: 10
}

const cakeReducer = (state = initialState, acion) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes -1
        }
    }
}

export default cakeReducer;