import { defaults } from "autoprefixer";
import { combineReducers } from "redux";

const initState = {
  user: null,
  token: null,
};

function userReducer(state = initState, action) {
  switch (action.type) {
    case "SET_LOGIN":
      return {
	      ...state,
	      user : action.payload.user,
	      token : action.payload.token,
      };
    case "SET_LOGOUT":
      return {
	      ...state,
	      user: null,
	      token: null
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  //more reducer about quizz coming
});

export default rootReducer;
