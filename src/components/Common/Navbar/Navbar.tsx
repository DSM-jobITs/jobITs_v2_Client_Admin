import React from "react";
import * as S from "./Navbar.style";
import { logo } from "../../../assets/img";
interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  return (
    <>
      <S.NavContainer>
        <S.Container>
            <S.Container flex={true}>
            <S.LogoImg src={logo}></S.LogoImg>
            </S.Container>
          <S.NavMenu>채용 의뢰</S.NavMenu>
          <S.NavMenu>공지사항</S.NavMenu>
        </S.Container>
      </S.NavContainer>
    </>
  );
};

export default Navbar;
