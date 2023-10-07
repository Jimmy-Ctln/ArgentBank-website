import { USER_LOGIN, USER_LOGIN_ERROR, USER_PROFILE } from "../actions/user.action";
import { USER_LOGOUT } from "../components/nav";

export const initialState = {
  isConnected: false,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        token: action.payload.token,
        status: action.payload.status,
        isConnected: true
      };
    case USER_LOGIN_ERROR:
      return {
        ...state,
        message: action.payload
      }
    case USER_PROFILE:
      return { 
        ...state,
        profileUser: action.payload,
    };
    case USER_LOGOUT:
      return {
        ...state,
        isConnected: false
      }
    default:
      return state;
  }
}
