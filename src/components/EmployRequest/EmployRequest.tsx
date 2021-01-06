import React from "react";
import * as S from "./EmployRequest.style";
import PageTemplate from "../Common/PageTemplate/PageTemplate";
import { EmployRequestTitleBox, EmployRequestItem } from "./index";
interface EmployRequestProps {}

const EmployRequest = ({}: EmployRequestProps) => {
  return (
    <>
      <PageTemplate>
        <S.EmployContainer>
          <S.Container>
            <EmployRequestTitleBox />
            <EmployRequestItem />
          </S.Container>
        </S.EmployContainer>
        <S.AddButton>기업 추가</S.AddButton>
      </PageTemplate>
    </>
  );
};

export default EmployRequest;
