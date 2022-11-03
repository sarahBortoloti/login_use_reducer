import { http } from "../../axios";
import { ACTION_TYPES } from "../constants";

type LoginResponse = {
  token: string;
};

type RefreshResponse = {
  refreshToken: string;
};

export const signIn = async (dispatch: React.Dispatch<any>, loginPayload: any) => {
  try {
    dispatch({ type: ACTION_TYPES.REQUEST });

    const { data } = await http.post<LoginResponse>("/auth", loginPayload, {});
    if (data.token) {
      dispatch({ type: ACTION_TYPES.LOGIN_SUCCESS, payload: data });
      localStorage.setItem("token", JSON.stringify(data.token));
      return data;
    }

    return {};
  } catch (error) {
    dispatch({ type: ACTION_TYPES.ERROR, error: error });
  }
}

export async function logout(dispatch: React.Dispatch<any>) {
  dispatch({ type: ACTION_TYPES.LOGOUT });
  localStorage.clear();
}

export const validateToken = async (dispatch: React.Dispatch<any>) => {
  const token = localStorage.getItem("token");

  try {
    dispatch({ type: ACTION_TYPES.REQUEST });

    const { status } = await http.get<RefreshResponse>("/validate", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // if (data.refreshToken) {
    //   dispatch({ type: ACTION_TYPES.VALIDATION_TOKEN_SUCCESS, payload: data });
    // }

    if (status !== 204)
      dispatch({ type: ACTION_TYPES.ERROR, error: "Token inválido" });
  } catch (error) {
    dispatch({ type: ACTION_TYPES.ERROR });
  }
};
