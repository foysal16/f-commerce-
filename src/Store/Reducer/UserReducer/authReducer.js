import { actionTypes } from "../../Action/actionTypes";

const userstate = {
  email: null,
  role: null,
  token: null,
};

const authReducer = (state = userstate, action) => {
  switch (action.type) {
    case actionTypes.SET_LOGIN_TOKEN:
      return {
        ...state,
        email: action.payload?.user,
        role: action.payload.role,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export default authReducer;
