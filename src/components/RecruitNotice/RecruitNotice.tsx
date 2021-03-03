import React from "react";
import * as S from "./RecruitNotice.style";
import { Link, useHistory } from "react-router-dom";
import { logo } from "../../assets/img";
import { FirstRecruit, SecondRecruit, ThirdRecruit, FourthRecruit } from "./index";
interface RecruitNoticeProps {}

const RecruitNotice = ({}: RecruitNoticeProps) => {
  const history = useHistory();
  const toNextRecruit = () => {
    history.push({
      pathname: `/employ`,
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
          >
            <S.Logo src={logo}></S.Logo>
          </Link>
          <S.FileUploadContainer>
            <input type="file"></input>
            <S.FileUploadBox>
              <S.FileButton>확인</S.FileButton>
              <S.Text white={true}>( 파일 삽입 후 확인 버튼을 누를 시 자동으로 입력됩니다. )</S.Text>
            </S.FileUploadBox>
          </S.FileUploadContainer>
          <FirstRecruit />
          <SecondRecruit />
          <ThirdRecruit />
          <FourthRecruit />
          <S.ButtonContainer>
            <S.CancelButton>취소</S.CancelButton>
            <S.NextButton onClick={toNextRecruit}>등록하기</S.NextButton>
          </S.ButtonContainer>
        </S.Container>
      </S.AllContainer>
    </>
  );
};

export default RecruitNotice;
