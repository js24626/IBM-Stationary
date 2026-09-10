import { jwtDecode } from "jwt-decode";

export const verifyToken = (token: string) => {
  if (!token || typeof token !== "string") {
    return null;
  }

  try {
    return jwtDecode(token);
  } catch {
    return null;
  }
};
