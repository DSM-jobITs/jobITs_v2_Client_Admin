import React, { useState } from "react";
import * as S from "./Login.style";
import { loginImg } from "../../assets/img";
interface LoginProps {
  onLogin: (id: string, password: string) => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const onSubmitLogin = () => onLogin(id, password);
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });
  const { id, password } = inputs;

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onKeyPressLogin = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSubmitLogin();
  };

  return (
    <S.LoginContainer>
      <S.LoginImg src={loginImg}></S.LoginImg>
      <S.Container>
        <S.Title>LOGIN</S.Title>
        <S.DescriptionText>Welcome to JobITs</S.DescriptionText>
        <S.Text>Log in to JobITs and use various features.</S.Text>
        <form>
          <S.Input placeholder="id" autoComplete="username" name="id" onChange={onChangeInput}></S.Input>
          <S.Input
            placeholder="password"
            autoComplete="current-password"
            name="password"
            onChange={onChangeInput}
            value={password}
            type="password"
            onKeyPress={onKeyPressLogin}
          ></S.Input>
        </form>
        <S.Button onClick={onSubmitLogin}>login</S.Button>
      </S.Container>
    </S.LoginContainer>
  );
};

export default Login;
