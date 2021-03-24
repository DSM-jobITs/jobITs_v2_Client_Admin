import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../Common/PageTemplate/PageTemplate";
import * as S from "../EmployRequest/EmployRequest.style";
import { EmployRequestTitleBox } from "../EmployRequest/index";
import { arrowBack, arrowForward } from "../../assets/img/index";

const TemporarySave = () => {
  return (
    <PageTemplate>
      <S.EmployContainer>
        <S.Container>
          <EmployRequestTitleBox title={"임시 저장"} />
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
              pathname: `/employ`,
            }}
          >
            <S.AddButton>돌아가기</S.AddButton>
          </Link>
        </S.Container>
      </S.Container>
    </PageTemplate>
  );
};

export default TemporarySave;
