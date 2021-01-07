import React from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import { logo } from "../../assets/img";
import * as S from "./RecruitNotice.style";
interface FourthRecruitProps {}

const FourthRecruit = ({}: FourthRecruitProps) => {
    const location = useLocation();
    const history = useHistory();
    const locationPage = location.pathname.split("/");
    const page = Number(locationPage[2]) + 1;

    const toNextRecruit = () => {
        history.push({
            pathname : `/employ`
        });
    };
  return (
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
        <S.NextButton onClick={toNextRecruit}>등록하기</S.NextButton>
        </S.Container>
    </S.AllContainer>
  );
};

export default FourthRecruit;
