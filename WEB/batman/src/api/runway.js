import client from "./client";

export const getList = () => client.get("/api/runway/");