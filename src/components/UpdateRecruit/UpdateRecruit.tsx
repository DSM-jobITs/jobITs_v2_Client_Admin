import React, { useState, ReactNode } from "react";
import * as S from "./../RecruitNotice/RecruitNotice.style";
import { Link } from "react-router-dom";
import { greenLogo } from "../../assets/img";
import { InitDataProps } from "../../interfaces";

interface UpdateRecruitProps {
  onUpdateRecruit: () => void;
  initData: InitDataProps;
  onFileRecruit: (data: FormData, no: string) => void;
  children: ReactNode;
}

const UpdateRecruit: React.FC<UpdateRecruitProps> = ({ onUpdateRecruit, initData, onFileRecruit, children }) => {
  const [file, setFile] = useState<any | null>([]);
  const onSubmitData = () => {
    onUpdateRecruit();
    if (!!file) {
      let forms = new FormData();
      forms.append("files", file[0]);
      onFileRecruit(forms, initData.entNo);
    }
  };

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    setFile(files);
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
            <S.Logo src={greenLogo}></S.Logo>
          </Link>
          <S.RecruitContainer>
            <S.InnerContainer>
              {children}

              <S.InputList>
                <S.Span>첨부파일</S.Span>
                <S.Input type="file" name="file" onChange={onFile}></S.Input>
              </S.InputList>
            </S.InnerContainer>
          </S.RecruitContainer>
          <S.ButtonContainer>
            <Link to="/employ">
              <S.CancelButton>취소</S.CancelButton>
            </Link>
            <S.NextButton onClick={onSubmitData}>등록하기</S.NextButton>
          </S.ButtonContainer>
        </S.Container>
      </S.AllContainer>
    </>
  );
};

export default UpdateRecruit;
