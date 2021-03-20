import React from "react";
import { Link } from "react-router-dom";
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
          <Link
            style={{ textDecoration: "none" }}
            to={{
              pathname: `/employ`,
            }}
          >
            <S.NavMenu>채용 의뢰</S.NavMenu>
          </Link>
          <S.NavMenu>공지사항</S.NavMenu>
        </S.Container>
      </S.NavContainer>
    </>
  );
};

export default Navbar;
