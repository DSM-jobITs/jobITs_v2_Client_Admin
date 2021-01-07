import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height : 100vh;
  background-color : #F5F5F5;
`;

export const Container = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  color: #3a801d;
  margin-top : 0;
`;

export const DescriptionText = styled.h3`
  font-weight: 300;
`;

export const Text = styled.p`
  color: #9a9891;
`;

export const Input = styled.input`
  border: 1px solid #d9d9d9;
  width: 20rem;
  height: 1.5rem;
  padding: 0.8rem 1.5rem;
  display: block;
  margin-bottom: 1.2rem;
  outline : none;
`;

export const Button = styled.button`
  background-color: #378913;
  color: white;
  width: 23rem;
  height: 3rem;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 1rem 1.5rem;
  box-shadow: 0px 3px 6px #00000016;
  opacity: 0.7;

  &:hover {
    opacity: 1;
    transition: 0.3s;
  }

  &:active {
    background-color: #338012;
    transition: 0.2s;
  }
`;

export const LoginImg = styled.img`
    width : 35rem;
    height: 35rem;
    margin-right : 5rem;
`;