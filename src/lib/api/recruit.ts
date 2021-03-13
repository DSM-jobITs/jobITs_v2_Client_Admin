import { getClientAccessToken } from "./client";

export const onRecruit = (data: object) => getClientAccessToken().post("/recruit", data);
