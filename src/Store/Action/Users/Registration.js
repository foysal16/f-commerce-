import axios from "axios";
import { actionTypes } from "../actionTypes";

export const addNewUser = (newUser) => {
  return {
    type: actionTypes.SET_NEW_USER_ADD,
    payload: newUser,
  };
};

export const requestNewUserAdd = (newUser) => {
  const { email, username, password, firstname, lastname } = newUser;

  return async (dispatch, action) => {
    const { data } = await axios.post("http://localhost:8080/signup", {
      email: email,
      username: username,
      password: password,
      firstname: firstname,
      lastname: lastname,
    });
    console.log(data, "=======");
    dispatch(addNewUser(data));
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

export const userDeleted = (id) => {
  return {
    type: actionTypes.DELETE_USER,
  };
};

export const deleteUser = (id) => {
  return async (dispatch, getState) => {
    const { authReducerStore } = getState();
    const { token } = authReducerStore.currentLoginUser;
    try {
      const { data } = await axios.delete(`http://localhost:8080/user/${id}`, {
        headers: { authorization: `bearer ${token}` },
      });
      dispatch(userDeleted());
      dispatch(loadUsers());
    } catch (error) {
      console.error(error);
    }
  };
};
