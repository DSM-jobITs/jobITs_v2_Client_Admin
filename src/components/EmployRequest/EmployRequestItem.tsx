import React from "react";
import * as S from "./EmployRequest.style";
interface EmployRequestItemProps {}

const EmployRequestItem = ({}: EmployRequestItemProps) => {
  return (
      <S.Container>
        <S.EmployBox company={true}>
          <S.Container>
            <S.CompanyText>01</S.CompanyText>
            <S.CompanyText>베어런</S.CompanyText>
          </S.Container>
          <S.TitleText>2021/01/06</S.TitleText>
        </S.EmployBox>
      </S.Container>
  );
};

export default EmployRequestItem;
