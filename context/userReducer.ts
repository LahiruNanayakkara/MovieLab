import { User } from "./types/user";

const initialState = {
  isSignedIn: false,
  currentUser: null,
  count: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return { ...state, isSignedIn: payload };
    case "LOGOUT":
      return { ...state, isSignedIn: payload };
    case "CHANGE_USER":
      return { ...state, currentUser: payload };
    case "INCREASE_COUNT":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};
