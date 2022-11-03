import { ACTION_TYPES } from "./constants";

type AuthProps = {
  email: string;
  token: string;
  loading: boolean;
  error?: unknown;
};

export const AuthReducer = (initialState: AuthProps, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.REQUEST:
      return {
        ...initialState,
        loading: true,
      };
    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...initialState,
        email: action.payload.email,
        token: action.payload.token,
        loading: false,
      };

    case ACTION_TYPES.VALIDATION_TOKEN_SUCCESS:
      return {
        ...initialState,
        token: action.payload.token,
        loading: false,
      };
    case ACTION_TYPES.LOGOUT:
      return {
        ...initialState,
        email: "",
        token: "",
      };

    case ACTION_TYPES.ERROR:
      return {
        ...initialState,
        loading: false,
        error: action.error,
      };

    default:
      return initialState;
  }
};
