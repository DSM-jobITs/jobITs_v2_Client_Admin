import React from "react";
import * as S from "./DetailEmploy.style";
import { entInfoObjectProps } from "../../interfaces";
interface CompanyInformationProps {
  entInfo: entInfoObjectProps | undefined;
}

const CompanyInformation = ({ entInfo }: CompanyInformationProps) => {
  return (
    <>
      <S.Text>기업 정보</S.Text>
      <S.CompanyBox>
        <S.CategoryBox>
          <S.Category>근로자 수</S.Category>
          <S.Category>연락처</S.Category>
          <S.Category>연 매출액</S.Category>
          <S.Category>주소</S.Category>
          <S.Category>설립 일자</S.Category>
          <S.Category>근무 시간</S.Category>
        </S.CategoryBox>
        <S.CategoryBox>
          <S.Contents>{entInfo && entInfo.numOfWorker ? `${entInfo.numOfWorker}명` : "정보 없음"}</S.Contents>
          <S.Contents>{entInfo && entInfo.entPhone ? entInfo.entPhone : "정보 없음"}</S.Contents>
          <S.Contents>{entInfo && entInfo.entSales ? `${entInfo.entSales}원` : "정보 없음"}</S.Contents>
          <S.Contents>{entInfo && entInfo.address ? entInfo.address : "정보 없음"}</S.Contents>
          <S.Contents>{entInfo && entInfo.establishmentDate ? entInfo.establishmentDate : "정보 없음"}</S.Contents>
          <S.Contents>
            {entInfo && entInfo.startTime} - {entInfo && entInfo.endTime}
          </S.Contents>
        </S.CategoryBox>
      </S.CompanyBox>
    </>
  );
};

export default CompanyInformation;
