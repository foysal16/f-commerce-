import axios from "axios";
import { actionTypes } from "../actionTypes";

export const addNewUser = (response) => {
  return {
    type: actionTypes.SET_NEW_USER_ADD,
    payload: response,
  };
};

export const requestNewUserAdd = (newUser) => {
  return async (dispatch) => {
    const { response } = await axios.post("http://localhost:8080/signup", {
      email: newUser.email,
      username: newUser.username,
      password: newUser.password,
      firstname: newUser.firstname,
      lastname: newUser.lastname,
    });
    console.log(response, "=======");
    dispatch(addNewUser(response));
  };
};

export const getUsers = (users) => ({
  type: actionTypes.GET_USERS,
  payload: users,
});

export const loadUsers = () => {
  return async (dispatch, getState) => {
    const { authReducerStore } = getState();
    const { token } = authReducerStore.currentLoginUser;
    try {
      const { data } = await axios.get("http://localhost:8080/user", {
        headers: { authorization: `bearer ${token}` },
      });
      dispatch(getUsers(data));
      console.log(data, null, " ");
    } catch (error) {
      console.error(error);
    }
  };
};

export const userDeleted = (_id) => {
  return {
    type: actionTypes.DELETE_USER,
  };
};

export const deleteUser = (_id) => {
  return async (dispatch, getState) => {
    const { authReducerStore } = getState();
    const { token } = authReducerStore.currentLoginUser;
    try {
      const { data } = await axios.delete(`http://localhost:8080/user/${_id}`, {
        headers: { authorization: `bearer ${token}` },
      });
      dispatch(userDeleted());
      dispatch(loadUsers());
    } catch (error) {
      console.error(error);
    }
  };
};
