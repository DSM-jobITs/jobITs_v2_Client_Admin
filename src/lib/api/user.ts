import { client } from "./client";

export interface Token {
  accessToken: string;
  refreshToken?: string;
}

export const login = (data: object) => client.post<Token>("/signin/admin", data);
