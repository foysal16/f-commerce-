import axios from "axios";
import { actionTypes } from "../actionTypes";

export const loginToken = (response) => {
  return {
    type: actionTypes.SET_LOGIN_TOKEN,
    payload: response,
  };
};

// export const setError = (error) => {
//   return {
//     type: actionTypes.SET_ERROR,
//     payload: error,
//   };
// };

export const requestLogin = (loginInInfo) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:8080/signin", {
        email: loginInInfo.email,
        password: loginInInfo.password,
      });
      dispatch(loginToken(response.data.userInfo));
    } catch (err) {
      console.log(err, "SignIn ===");
    }
  };
};
