import { SING_UP } from "../actions/Login.action";

const initalState = {
  token: null,
  userID: null,
};

const LoginReducer = (state = initalState, action) => {
  switch (action.type) {
    case SING_UP:
      return { ...state, token: action.token, userID: action.userID };
      default: return state;
  }
};

export default LoginReducer;