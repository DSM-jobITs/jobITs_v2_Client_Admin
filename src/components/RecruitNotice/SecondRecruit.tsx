import React from "react";
import * as S from "./RecruitNotice.style";
interface SecondRecruitProps {}

const SecondRecruit = ({}: SecondRecruitProps) => {
  return (
    <>
      <S.RecruitContainer height={true}>
        <S.InnerContainer>
          <S.Container flex={false}>
            <S.InputList>
              <S.Span point={true}>*</S.Span>
              <S.Span point={false}>회사소개</S.Span>
            </S.InputList>
            <S.TextArea></S.TextArea>
          </S.Container>
          <S.Container flex={false}>
            <S.InputList>
              <S.Span point={true}>*</S.Span>
              <S.Span point={false}>업무내용</S.Span>
              <S.TextArea></S.TextArea>
            </S.InputList>
          </S.Container>
        </S.InnerContainer>
      </S.RecruitContainer>
    </>
  );
};

export default SecondRecruit;
