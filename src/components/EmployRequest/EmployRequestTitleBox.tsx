import React from "react";
import * as S from "./EmployRequest.style";

const EmployRequestTitleBox = () => {
  return (
    <S.Container>
      <S.Title>채용 의뢰</S.Title>
      <S.EmployBox>
        <S.TitleText>No</S.TitleText>
        <S.TitleText>기업명</S.TitleText>
        <S.TitleText>등록일</S.TitleText>
      </S.EmployBox>
    </S.Container>
  );
};

export default EmployRequestTitleBox;
