import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import * as S from "./RecruitNotice.style";

interface FirstRecruitProps {}

const FirstRecruit = ({}: FirstRecruitProps) => {
    const location = useLocation();
    const history = useHistory();
    const locationPage = location.pathname.split("/");
    const page = Number(locationPage[2]) + 1;

    const toNextRecruit = () => {
        history.push({
            pathname : `recruit/${page}`
        });
    };
    

  return (
    <>
    <S.AllContainer big={true}>
    <S.Container>
        <S.RecruitContainer>
            <S.InnerContainer>
            <S.Container flex={true}>
                <S.InputList><S.Span point={true}>*</S.Span><S.Span>모집인원</S.Span></S.InputList>
                <S.InputList><S.Input type="checkbox" name="color" value="sw" />SW 개발과 (</S.InputList>
                <S.InputList><S.Input type="text" />) 명</S.InputList>
                <S.InputList><S.Input type="checkbox" name="color" value="em" />임베디드과 (</S.InputList>
                <S.InputList><S.Input type="text" />) 명</S.InputList>
                <S.InputList><S.Input type="checkbox" name="color" value="info" />정보보안과 (</S.InputList>
                <S.InputList><S.Input type="text" />) 명</S.InputList>
                <S.InputList><S.Input type="checkbox" name="color" value="none" />학과무관 (</S.InputList>
                <S.InputList><S.Input type="text" />) 명</S.InputList>
            </S.Container>
            <S.Container flex={true}>
                <S.Container>
                    <S.InputList><S.Span point={true}>*</S.Span><S.Span>업체명</S.Span></S.InputList>
                    <S.InputLine type="text"></S.InputLine>
                </S.Container>
                <S.Container>
                    <S.InputList><S.Span point={true}>*</S.Span><S.Span>산업자 번호</S.Span></S.InputList>
                    <S.InputLine type="text"></S.InputLine>
                </S.Container>
            </S.Container>
            <S.Container>
                <S.InputList><S.Span point={true}>*</S.Span><S.Span>연락처</S.Span></S.InputList>
                <S.InputLine type="text"></S.InputLine>
            </S.Container>
            <S.Container flex={true}>
                <S.Container>
                    <S.InputList><S.Span point={true}>*</S.Span><S.Span>연매출액</S.Span></S.InputList>
                    <S.InputLine type="text"></S.InputLine><S.Span>원</S.Span>
                </S.Container>
                <S.Container>
                    <S.InputList><S.Span point={true}>*</S.Span><S.Span>근로자수</S.Span></S.InputList>
                    <S.InputLine type="text"></S.InputLine><S.Span>명</S.Span>
                </S.Container>
            </S.Container>
                    <S.Container>
                        <S.InputList><S.Span point={true}>*</S.Span><S.Span>업종형태</S.Span></S.InputList>
                        <S.InputLine type="text"></S.InputLine>
                    </S.Container>
                    <S.Container >
                        <S.InputList><S.Span point={true}>*</S.Span><S.Span>설립일자</S.Span></S.InputList>
                        <S.InputLine type="text" width="small"></S.InputLine><S.Span>년</S.Span>
                        <S.InputLine type="text" width="small"></S.InputLine><S.Span>월</S.Span>
                        <S.InputLine type="text" width="small"></S.InputLine><S.Span>일</S.Span>
                    </S.Container>
                <S.Container flex={true}>
                    <S.Container>
                        <S.InputList><S.Span point={true}>*</S.Span><S.Span>주소</S.Span></S.InputList>
                        <S.InputLine type="text" width="small"></S.InputLine><S.Span>시</S.Span>
                        <S.InputLine type="text" width="small"></S.InputLine><S.Span>구</S.Span>
                        <S.InputLine type="text" width="small"></S.InputLine><S.Span>동</S.Span>
                    </S.Container>
                    <S.Container>
                        <S.InputList><S.Span point={true}>*</S.Span><S.Span>우편번호</S.Span></S.InputList>
                        <S.InputLine type="text"></S.InputLine>
                        <S.SearchButton>검색</S.SearchButton>
                    </S.Container>
                </S.Container>
                <S.Container>
                    <S.InputList><S.Span point={true}>*</S.Span><S.Span>주소</S.Span></S.InputList>
                    <S.InputLine type="text" placeholder="(직급)"></S.InputLine>
                    <S.InputLine type="text" placeholder="전화번호"></S.InputLine>
                    <S.InputLine type="text" placeholder="이메일"></S.InputLine>
                </S.Container>
            </S.InnerContainer>
        </S.RecruitContainer>
        <S.NextButton onClick={toNextRecruit}>다음</S.NextButton>
      </S.Container>
      </S.AllContainer>
    </>
  );
};

export default FirstRecruit;
