export enum ACTION_TYPES {
  REQUEST = "REQUEST",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  VALIDATION_TOKEN_SUCCESS = "VALIDATION_TOKEN_SUCCESS",
  ERROR = "ERROR",
  LOGOUT = "LOGOUT",
}

export const INITIAL_STATE_LOGIN = {
  email: "",
  token: "",
  loading: false,
  error: null,
};
