import { actionTypes } from "../../Action/actionTypes";

const userstate = {
    currentLoginUser: {
        email: "",
        role: "",
        token: "",
    },
    error: null,
};

const authReducer = (state = userstate, action) => {
    switch (action.type) {
        case actionTypes.SET_LOGIN_TOKEN:
            return {
                ...state,
                currentLoginUser: {
                    ...state.currentLoginUser,
                    email: action.payload.userInfo.user,
                    role: action.payload.userInfo.role,
                    token: action.payload.userInfo.token,
                }
            }
        default: 
            return state;
    }
}

export default authReducer;