const initialState ={
    userLogin: [],
}

const loginReducer = (state = initialState, action)=>{
    if (action.type === "USER_LOGIN"){
        return{...state, userLogin: action.payload}
    }else{
        return state;
    }
}

export default loginReducer;