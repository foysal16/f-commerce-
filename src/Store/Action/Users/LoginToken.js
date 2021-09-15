import axios from "axios";
import { actionTypes } from "../actionTypes";

export const loginToken = (currentLoginUser) =>{
    return {
        type: actionTypes.SET_LOGIN_TOKEN,
        payload: currentLoginUser,
    };
};

export const setError = (error) => {
    return {
        type: actionTypes.SET_ERROR,
        payload: error,
    };
};

export const requestLogin = (loginInInfo)=>{
    return async (dispatch)=>{
        const {data} = await axios.post('http://localhost:8080/signin', {
            email: loginInInfo.email,
            password: loginInInfo.password,
        });

        if (data.message === "Logged in Successfully") {
            dispatch(loginToken(data));
        }else{
            dispatch(data, "Error")
        } 
    }
}