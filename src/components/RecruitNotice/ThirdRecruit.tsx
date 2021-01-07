import React from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import { logo } from "../../assets/img";
import * as S from "./RecruitNotice.style";
interface ThirdRecruitProps {}

const ThirdRecruit = ({}: ThirdRecruitProps) => {
    const location = useLocation();
    const history = useHistory();
    const locationPage = location.pathname.split("/");
    const page = Number(locationPage[2]) + 1;

    const toNextRecruit = () => {
        history.push({
            pathname : `/fourth-recruit`
        });
    };
    
  return (
    <>
    <S.AllContainer big={true}>
        <S.Container>
        <Link
            style={{ textDecoration: "none" }}
            to={{
              pathname: `/employ`,
            }}
          ><S.Logo src={logo}></S.Logo></Link>
        <S.RecruitContainer>
            <S.InnerContainer>
            <S.Container flex={true}>
                <S.InputList>
                <S.Span>자격요건</S.Span>
                <S.InputLine type="text"></S.InputLine>
                <S.InputLine type="text"></S.InputLine>
                </S.InputList>
            </S.Container>
            <S.InputList>
                <S.Span point={true}>*</S.Span>
                <S.Span>근무시간</S.Span>
                <S.InputLine type="text"></S.InputLine>
            </S.InputList>
            <S.InputList>
                <S.Span point={true}>*</S.Span>
                <S.Span>급여</S.Span>
                <S.InputLine type="text"></S.InputLine>
            </S.InputList>
            <S.InputList>
                <S.Span point={true}>*</S.Span>
                <S.Span>실습기간</S.Span>
                <S.InputLine type="text"></S.InputLine>
                <S.Span>개월</S.Span>
            </S.InputList>
            <S.Container flex={true}>
                    <S.InputList><S.Span point={true}>*</S.Span><S.Span>식비지원</S.Span></S.InputList>
                    <S.InputList><S.Input type="checkbox" name="color" value="sw" />조식 제공</S.InputList>
                    <S.InputList><S.Input type="checkbox" name="color" value="sw" />중식 제공</S.InputList>
                    <S.InputList><S.Input type="checkbox" name="color" value="sw" />석식 제공</S.InputList>
                    <S.InputList><S.Input type="checkbox" name="color" value="sw" />수당 포함</S.InputList>
                </S.Container>
                <S.Container flex={true}>
                    <S.InputList><S.Span point={true}>*</S.Span><S.Span>식비지원</S.Span></S.InputList>
                    <S.InputList><S.Input type="checkbox" name="color" value="sw" />4대 보험</S.InputList>
                    <S.InputList><S.Input type="checkbox" name="color" value="sw" />자기 개발비</S.InputList>
                    <S.InputList><S.Input type="checkbox" name="color" value="sw" />노트북 지원</S.InputList>
                    <S.InputList><S.Input type="checkbox" name="color" value="sw" />기타 (</S.InputList>
                        <S.InputList><S.Input type="text" />)</S.InputList>
                </S.Container>
            {/* <S.InputLine type="text"></S.InputLine> */}
            </S.InnerContainer>
        </S.RecruitContainer>
        <S.NextButton onClick={toNextRecruit}>다음</S.NextButton>
      </S.Container>
      </S.AllContainer>
    </>
  );
};

export default ThirdRecruit;
