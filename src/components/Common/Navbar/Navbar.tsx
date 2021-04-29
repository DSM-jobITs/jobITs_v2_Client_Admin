import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./Navbar.style";
import { logo } from "../../../assets/img";
import { WarningToast } from "../../../lib/toast";

const Navbar = () => {
  const [selected, setSelected] = useState(0);
  const routers = [
    {
      link: "/employ",
      name: "채용 의뢰",
    },
    {
      link: "/employ",
      name: "공지사항",
    },
  ];
  const onNextNav = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const { innerText } = e.currentTarget;
    innerText === "채용 의뢰" ? setSelected(0) : WarningToast("추후 개발 기능입니다.")
  };
  return (
    <>
      <S.NavContainer>
        <S.Container>
          <S.Container flex={true}>
            <Link to="/employ">
              <S.LogoImg src={logo}></S.LogoImg>
            </Link>
          </S.Container>
          {routers.map((r, index) => (
            <Link to={r.link} style={{ textDecoration: "none" }}>
              <S.NavMenu key={index} style={{ backgroundColor: index === selected ? "#349a07" : "" }} onClick={onNextNav}>
                {r.name}
              </S.NavMenu>
            </Link>
          ))}
        </S.Container>
      </S.NavContainer>
    </>
  );
};

export default Navbar;
