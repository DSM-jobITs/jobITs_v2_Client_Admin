import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Login.style";
import { loginImg } from "../../assets/img";
interface LoginProps {}

const Login = ({}: LoginProps) => {
  return (
    <S.LoginContainer>
      <S.LoginImg src={loginImg}></S.LoginImg>
      <S.Container>
        <S.Title>LOGIN</S.Title>
        <S.DescriptionText>Welcome to JobITs</S.DescriptionText>
        <S.Text>Log in to JobITs and use various features.</S.Text>
        <S.Input placeholder="id"></S.Input>
        <S.Input placeholder="password" type="password"></S.Input>
        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: `/employ`,
          }}
        >
          <S.Button>login</S.Button>
        </Link>
      </S.Container>
    </S.LoginContainer>
  );
};

export default Login;
