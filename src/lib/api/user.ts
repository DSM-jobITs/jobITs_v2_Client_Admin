import { client } from "./client";

export interface Token {
  accessToken: string;
  refreshToken?: string;
}

export const login = (data: { email: string; password: string }) => client.post<Token>(" /signin/admin", data);
