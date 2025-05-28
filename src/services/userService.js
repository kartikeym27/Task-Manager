import { httpAxios } from "@/helper/httpHelper";

export async function signUp(user) {
  const result = await httpAxios
    .post("/api/users", user)
    .then((response) => response.data);

  return result;
}

export async function login(loginData) {
  const result = await httpAxios
    .post("/api/login", loginData)
    .then((response) => response.data);
  return result;
}
export async function currentUser() {
  if (typeof window === "undefined") {
    // Avoid server-side call that needs a JWT
    return null;
  }

  try {
    const result = await httpAxios.get("/api/current").then((res) => res.data);
    return result;
  } catch (err) {
    console.error("Error fetching current user", err);
    return null;
  }
}

export async function logout() {
  const result = await httpAxios
    .post("/api/logout")
    .then((response) => response.data);
  return result;
}
