import axios from 'axios';
import { actionTypes } from '../ActionTypes';

export const loginUser = (CurrentloginUser)=>{
    return ({
        type:actionTypes.NEW_USER,
        payload: CurrentloginUser
    })
}

export const loginUserRequest =(signUpNew)=> {
    return async (dispatch) => {
        const {data} = await axios.post('http://localhost:8080/signin',
            {
                email: signUpNew.email,
                password: signUpNew.password,
            }
        );

        dispatch(loginUser(data));
    }
}
