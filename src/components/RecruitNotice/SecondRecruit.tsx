import React from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import { logo } from "../../assets/img";
import * as S from "./RecruitNotice.style";
interface SecondRecruitProps {}

const SecondRecruit = ({}: SecondRecruitProps) => {
    const location = useLocation();
    const history = useHistory();
    const locationPage = location.pathname.split("/");
    const page = Number(locationPage[2]) + 1;

    const toNextRecruit = () => {
        history.push({
            pathname : `/third-recruit`
        });
    };

  return (
    <>
      <S.AllContainer>
        <S.Container>
        <Link
            style={{ textDecoration: "none" }}
            to={{
              pathname: `/employ`,
            }}
          ><S.Logo src={logo}></S.Logo></Link>
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
          <S.NextButton onClick={toNextRecruit}>다음</S.NextButton>
        </S.Container>
      </S.AllContainer>
    </>
  );
};

export default SecondRecruit;
