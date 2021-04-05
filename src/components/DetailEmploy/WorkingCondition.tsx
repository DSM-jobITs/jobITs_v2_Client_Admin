import React from "react";
import * as S from "./DetailEmploy.style";
import { WorkingObjectProps, MealProps, WelfareProps } from "../../interfaces";
interface WorkingConditionsProps {
  workingConditions: WorkingObjectProps | undefined;
  meal: MealProps | undefined;
  welfare: WelfareProps | undefined;
}

const WorkingCondition = ({ workingConditions, meal, welfare }: WorkingConditionsProps) => {
  return (
    <>
      <S.Text>근무 조건 및 복지</S.Text>
      <S.CompanyBox>
        <S.CategoryBox>
          <S.Category>실습 수당 (월)</S.Category>
          <S.Category>채용 후 연봉</S.Category>
          <S.Category>실습 기간</S.Category>
          <S.Category>식비지원</S.Category>
          <S.Category>복지</S.Category>
        </S.CategoryBox>
        <S.CategoryBox>
          <S.Contents>{workingConditions && workingConditions.allowance ? `${workingConditions.allowance}원` : "비공개"}</S.Contents>
          <S.Contents>{workingConditions && workingConditions.salary ? workingConditions.salary : "비공개"}</S.Contents>
          <S.Contents>{workingConditions && workingConditions.period ? workingConditions.period + "개월" : "비공개"}</S.Contents>
          <S.Contents>
            {meal && meal.breakfast ? "조식 제공, " : null}
            {meal && meal.lunch ? "중식 제공, " : null}
            {meal && meal.dinner ? "석식 제공, " : null}
            {meal && meal.includeSalary ? "급여포함 " : "급여 미포함"}
          </S.Contents>
          <S.Contents>
            {welfare && welfare.fourMajor ? "4대 보험, " : null}
            {welfare && welfare.selfDevelop ? "자기 개발비, " : null}
            {welfare && welfare.laptop ? "노트북 제공, " : null}
            {welfare && !(welfare.etc === "정보 없음") ? welfare.etc : null}
          </S.Contents>
        </S.CategoryBox>
      </S.CompanyBox>
    </>
  );
};

export default WorkingCondition;
