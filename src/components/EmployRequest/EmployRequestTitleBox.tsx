import React from "react";
import * as S from "./EmployRequest.style";
interface EmployRequestTitleBoxProps {
  title?: string;
}

const EmployRequestTitleBox = ({title}: EmployRequestTitleBoxProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.EmployBox>
        <S.TitleText>No</S.TitleText>
        <S.TitleText>기업명</S.TitleText>
        <S.TitleText>등록일</S.TitleText>
      </S.EmployBox>
    </S.Container>
  );
};

export default EmployRequestTitleBox;
