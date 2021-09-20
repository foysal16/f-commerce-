import { actionTypes } from "../../actionTypes";

const initialState = {
  users: [],
};
const addUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NEW_USER:
      return {
        ...state,
        users: [
          ...state.users,
          {
            email: action.payload.email,
            username: action.payload.username,
            password: action.payload.password,
            firstname: action.payload.firstname,
            lastname: action.payload.lastname,
          },
        ],
      };

    default:
      return state;
  }
};

export default addUserReducer;
