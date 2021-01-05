import React from "react";
import * as S from "./RecruitNotice.style";
interface FourthRecruitProps {}

const FourthRecruit = ({}: FourthRecruitProps) => {
  return (
    <>
    <S.AllContainer>
        <S.Container>
        <S.RecruitContainer height={true}>
            <S.InnerContainer>
            <S.Container flex={true}>
                    <S.InputList><S.Span point={true}>*</S.Span><S.Span>실습 후 채용 계획</S.Span></S.InputList>
                    <S.InputList><S.Input type="checkbox" name="color" value="sw" />결격사유 없을 시 전원채용</S.InputList>
                    <S.InputList><S.Input type="checkbox" name="color" value="sw" />평가 후 일부 채용</S.InputList>
            </S.Container>
            <S.Container flex={false}>
                <S.InputList><S.Span point={true}>*</S.Span><S.Span>접수일자</S.Span></S.InputList>
                <S.InputLine type="text" width="small"></S.InputLine><S.Span point={false}>년</S.Span>
                <S.InputLine type="text" width="small"></S.InputLine><S.Span point={false}>월</S.Span>
                <S.InputLine type="text" width="small"></S.InputLine><S.Span point={false}>일</S.Span>
            </S.Container>
            <S.Container flex={false}>
                <S.InputList><S.Span point={true}>*</S.Span><S.Span>마감일자</S.Span></S.InputList>
                <S.InputLine type="text" width="small"></S.InputLine><S.Span point={false}>년</S.Span>
                <S.InputLine type="text" width="small"></S.InputLine><S.Span point={false}>월</S.Span>
                <S.InputLine type="text" width="small"></S.InputLine><S.Span point={false}>일</S.Span>
            </S.Container>
            <S.InputList>
                <S.Span>첨부파일</S.Span>
                <S.Input type="file"></S.Input>
            </S.InputList>
            </S.InnerContainer>
        </S.RecruitContainer>
        <S.NextButton>다음</S.NextButton>
        </S.Container>
    </S.AllContainer>
    </>
  );
};

export default FourthRecruit;
