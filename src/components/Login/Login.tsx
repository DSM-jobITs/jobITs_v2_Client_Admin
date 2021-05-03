import React from "react";
import * as S from "./Login.style";
import { loginImg } from "../../assets/img";
interface LoginProps {
  onSubmitLogin: () => void;
  onKeyPressLogin: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputs: any;
  setInputs: any;
}

const Login = ({ onSubmitLogin, onKeyPressLogin, inputs, setInputs }: LoginProps) => {
  return (
    <S.LoginContainer>
      <S.LoginImg src={loginImg}></S.LoginImg>
      <S.Container>
        <S.Title>LOGIN</S.Title>
        <S.DescriptionText>Welcome to JobITs</S.DescriptionText>
        <S.Text>Log in to JobITs and use various features.</S.Text>
        <S.Form>
          <S.Input placeholder="id" autoComplete="username" name="id" value={inputs.id} onChange={setInputs} onKeyPress={onKeyPressLogin}></S.Input>
          <S.Input
            placeholder="password"
            autoComplete="current-password"
            name="password"
            onChange={setInputs}
            value={inputs.password}
            type="password"
            onKeyPress={onKeyPressLogin}
          ></S.Input>
        </S.Form>
        <S.Button onClick={onSubmitLogin}>Login</S.Button>
      </S.Container>
    </S.LoginContainer>
  );
};

export default Login;
