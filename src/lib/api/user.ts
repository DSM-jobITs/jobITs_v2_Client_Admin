import { client } from "./client";

export interface Token {
  data: TokenData;
}

interface TokenData {
  accessToken: string;
  refreshToken: string;
}

export const login = (data: object) => client.post<Token>("/signin/admin", data);
