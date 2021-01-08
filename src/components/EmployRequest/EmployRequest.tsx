import React from "react";
import { Link } from "react-router-dom";
import * as S from "./EmployRequest.style";
import PageTemplate from "../Common/PageTemplate/PageTemplate";
import { EmployRequestTitleBox, EmployRequestItem } from "./index";
import { arrowBack, arrowForward } from "../../assets/img/index";
interface EmployRequestProps {}

const EmployRequest = ({}: EmployRequestProps) => {
  return (
      <PageTemplate>
        <S.EmployContainer>
          <S.Container>
            <EmployRequestTitleBox />
            <EmployRequestItem />
          </S.Container>
        </S.EmployContainer>
        <S.Container flex={true}>
          <S.PageNationBox>
            <S.PageNationItem>
              <S.Img src={arrowBack}></S.Img>
            </S.PageNationItem>
            <S.PageNationItem>1</S.PageNationItem>
            <S.PageNationItem>2</S.PageNationItem>
            <S.PageNationItem>3</S.PageNationItem>
            <S.PageNationItem>4</S.PageNationItem>
            <S.PageNationItem>5</S.PageNationItem>
            <S.PageNationItem last={true}>
              <S.Img src={arrowForward}></S.Img>
            </S.PageNationItem>
          </S.PageNationBox>
          <S.Container>
            <Link
              style={{ textDecoration: "none" }}
              to={{
                pathname: `/save`,
              }}
            >
              <S.SaveButton>임시저장 보기</S.SaveButton>
            </Link>

            <Link
              style={{ textDecoration: "none" }}
              to={{
                pathname: `/first-recruit`,
              }}
            >
              <S.AddButton>기업 추가</S.AddButton>
            </Link>
          </S.Container>
        </S.Container>
      </PageTemplate>
  );
};

export default EmployRequest;
