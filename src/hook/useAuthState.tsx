import React from "react";
import { AuthContext } from "../context/AuthContext";

export function useAuthState() {
  const context = React.useContext(AuthContext);

  return context;
}