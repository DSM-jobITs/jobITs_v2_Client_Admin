import React from "react";
import * as S from "./DetailEmploy.style";
import { OtherObjectProps } from "../../interfaces";
interface OtherInformationProps {
  other: OtherObjectProps | undefined;
  file: string[];
}

const OtherInformation = ({ other, file }: OtherInformationProps) => {
  return (
    <>
      <S.Text>기타</S.Text>
      <S.CompanyBox>
        <S.CategoryBox>
          <S.Category>모집 인원</S.Category>
          <S.Category>실습 후 채용 계획</S.Category>
          <S.Category>접수 일자</S.Category>
          <S.Category>첨부 파일</S.Category>
        </S.CategoryBox>
        <S.CategoryBox>
          <S.Contents>{other && other.personnel ? `${other.personnel}명` : "0"}</S.Contents>
          <S.Contents>{other && other.recruitPlan ? "채용계획 있음" : "평가 후 일부 채용"}</S.Contents>
          <S.Contents>{other && other.reception}</S.Contents>
          <S.Contents>
            {file && file.length > 0
              ? file.map((item: any, index: number) => (
                  <a key={index} href={process.env.REACT_APP_S3_URL + item.url} download={item.name}>
                    {item.name}
                  </a>
                ))
              : "없음"}
          </S.Contents>
        </S.CategoryBox>
      </S.CompanyBox>
    </>
  );
};

export default OtherInformation;
