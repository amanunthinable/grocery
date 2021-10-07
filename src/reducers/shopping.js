
import UserActionTypes from "../actions/types"
const initalState={
    qty:"",
    fruit:[],
    price:"",

}

const shopping = (state=initalState,action) =>{

    switch(action.type){
        case UserActionTypes.ADD_FRUIT_START :{
            return {
              ...state,
              fruit:[action.payload,...state.fruit]
            }
        }
        default:
    return state
    }


}


export default shopping