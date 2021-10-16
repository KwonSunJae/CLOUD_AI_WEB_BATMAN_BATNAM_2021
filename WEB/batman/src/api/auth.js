import client from "./client";

export const login = form => client.post("/api/auth/login",form);
export const register= form => client.post("/api/auth/register",form=>form);
export const logout = () => client.get("/api/auth/logout");