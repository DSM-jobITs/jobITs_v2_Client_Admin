import React from "react";
import * as S from "./DetailEmploy.style";

interface QualificationProps {
  certificate: string[];
  grade: string;
  specialty: string[];
}

const Qualification = ({ certificate, grade, specialty }: QualificationProps) => {
  return (
    <>
      <S.Text>자격 요건</S.Text>
      <S.CompanyBox>
        <S.CategoryBox>
          <S.Category>자격증</S.Category>
          <S.Category>성적</S.Category>
          <S.Category>특기사항</S.Category>
        </S.CategoryBox>
        <S.CategoryBox>
          <S.Contents>
            {certificate && certificate.length > 0 ? certificate.map((item: string, index: number) => <span key={index}> {item}</span>) : "무관"}
          </S.Contents>
          <S.Contents>{grade ? grade : "무관"}</S.Contents>
          <S.Contents>
            {specialty && specialty.length > 0 ? specialty.map((item: string, index: number) => <span key={index}> {item}</span>) : "없음"}
          </S.Contents>
        </S.CategoryBox>
      </S.CompanyBox>
    </>
  );
};

export default Qualification;
