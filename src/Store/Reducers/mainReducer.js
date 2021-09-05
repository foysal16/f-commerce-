import { combineReducers } from "redux";
import addnewUser from './LoginResgistration/SignUpReducer';

const MainReducer = combineReducers({
    addnewUser,
})

export default MainReducer;