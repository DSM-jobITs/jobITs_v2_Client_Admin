import styled from "styled-components";

export const NavContainer = styled.div`
  background-color: #2f2f2f;
  height: 94vh;
  width: 14rem;
  display: flex;
  justify-content: center;
  padding: 1.8rem 2rem;
  z-index : 1;
`;

export const Container = styled.div<{ flex?: boolean }>`
  display: ${(props) => (props.flex ? "flex" : "")};
  justify-content: center;
`;

export const LogoImg = styled.img`
  margin-bottom: 3.5rem;
`;

export const NavMenu = styled.h3`
  text-align: center;
  color: white;
  margin-top: 0;
  padding: 1.2rem 2rem;
  cursor: pointer;
  width: 14rem;
  &:hover {
    background-color: #349a07;
  }

  &:active {
    background-color: #33890d;
  }
`;
