import React from "react";
import * as S from "./EmployRequest.style";
import EmployRequestPageTemplate from "../Common/PageTemplate/EmployRequestPageTemplate";
import { EmployRequestTitleBox, EmployRequestItem } from "./index";
interface EmployRequestProps {}

const EmployRequest = ({}: EmployRequestProps) => {
  return (
    <>
      <EmployRequestPageTemplate>
        <S.EmployContainer>
          <S.Container>
            <EmployRequestTitleBox />
            <EmployRequestItem />
          </S.Container>
        </S.EmployContainer>
        <S.AddButton>기업 추가</S.AddButton>
      </EmployRequestPageTemplate>
    </>
  );
};

export default EmployRequest;
