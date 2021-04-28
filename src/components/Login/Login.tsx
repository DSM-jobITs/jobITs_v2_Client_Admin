import React, { useState } from "react";
import * as S from "./Login.style";
import { loginImg } from "../../assets/img";
interface LoginProps {
  onSubmitLogin: () => void;
  onKeyPressLogin: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputs: { id: string; password: string };
}

const Login = ({ onSubmitLogin, onKeyPressLogin, onChangeInput, inputs }: LoginProps) => {
  return (
    <S.LoginContainer>
      <S.LoginImg src={loginImg}></S.LoginImg>
      <S.Container>
        <S.Title>LOGIN</S.Title>
        <S.DescriptionText>Welcome to JobITs</S.DescriptionText>
        <S.Text>Log in to JobITs and use various features.</S.Text>
        <form>
          <S.Input placeholder="id" autoComplete="username" name="id" value={inputs.id} onChange={onChangeInput}></S.Input>
          <S.Input
            placeholder="password"
            autoComplete="current-password"
            name="password"
            onChange={onChangeInput}
            value={inputs.password}
            type="password"
            onKeyPress={onKeyPressLogin}
          ></S.Input>
        </form>
        <S.Button onClick={onSubmitLogin}>Login</S.Button>
      </S.Container>
    </S.LoginContainer>
  );
};

export default Login;
