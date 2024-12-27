import { User } from "../types/user";

export const loginAction = () => {
  return {
    type: "LOGIN",
    payload: true,
  };
};

export const logOutAction = () => {
  return {
    type: "LOGIN",
    payload: false,
  };
};

export const changeUserAction = (user: User) => {
  return {
    type: "CHANGE_USER",
    payload: user,
  };
};

export const increseCountAction = () => {
  return {
    type: "INCREASE_COUNT",
  };
};
