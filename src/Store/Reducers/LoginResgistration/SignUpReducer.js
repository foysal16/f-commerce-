import { actionTypes } from "../../Actions/ActionTypes"

const initialState = {
    users: [],
};


const SignUpReducer =(state = initialState, action) =>{
    switch (action.type){
        case actionTypes.NEW_USER:
            return {
                ...state,
                users: [
                    ...state.users,
                    {   
                        username: action.payload.username,
                        firstname: action.payload.firstname,
                        lastname: action.payload.lastname,
                        password: action.payload.password,
                        email: action.payload.email,
                    },
                ],
            };
        default:
            return state;
    }
}

export default SignUpReducer;