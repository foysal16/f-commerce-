import axios from 'axios';
import { actionTypes } from "../ActionTypes";

export const newUserAdd = (newUserR) =>{
    return {
        type:actionTypes.NEW_USER,
        payload: newUserR,
    };
};


export const addNewUserRequest = (newUserR) => {
        const {
            firstname,
            lastname,
            email,
            username,
            password,
           
        } = newUserR;

        return async (dispatch) => {
            const { data } = await axios.post("http://localhost:8080/signup", {
                firstname: firstname,
                lastname: lastname,
                email: email,
                username: username,
                password: password,
            });
            console.log(data, "User Data");

            dispatch(newUserAdd(data));

        };
    }