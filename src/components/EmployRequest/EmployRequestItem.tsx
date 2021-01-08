import React from "react";
import { Link } from "react-router-dom";
import * as S from "./EmployRequest.style";
import { deleteIcon, addIcon } from "../../assets/img";
interface EmployRequestItemProps {}

const EmployRequestItem = ({}: EmployRequestItemProps) => {
  return (
    <S.Container>
      <S.EmployBox company={true}>
        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: `/employ/id`,
          }}
        >
          <S.Container company={true}>
            <S.CompanyText>01</S.CompanyText>
            <S.CompanyText>베어런</S.CompanyText>
          </S.Container>
        </Link>
        <S.ImgContainer>
          <S.TitleText date={true}>2021/01/06</S.TitleText>
          <S.Img src={deleteIcon} delete={true}></S.Img>
          <Link
            style={{ textDecoration: "none" }}
            to={{
              pathname: `/edit/:id`,
            }}
          >
            <S.Img src={addIcon}></S.Img>
          </Link>
        </S.ImgContainer>
      </S.EmployBox>
    </S.Container>
  );
};

export default EmployRequestItem;
