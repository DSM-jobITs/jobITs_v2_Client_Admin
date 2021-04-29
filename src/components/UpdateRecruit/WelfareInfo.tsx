import React from "react";
import * as S from "./../RecruitNotice/RecruitNotice.style";
import { MealProps, WelfareProps } from "../../interfaces";
interface WelfareRecruitProps {
  meal: MealProps;
  welfare: WelfareProps;
  onWelfareCheckBox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMealCheckBox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeInitData: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const WelfareInfo: React.FC<WelfareRecruitProps> = ({ meal, welfare, onMealCheckBox, onWelfareCheckBox, onChangeInitData }) => {
  return (
    <>
      <S.Container flex={true}>
        <S.InputList>
          <S.Span>복지</S.Span>
        </S.InputList>
        <S.InputList>
          <S.Input type="checkbox" name="fourMajor" checked={welfare.fourMajor || false} onChange={onWelfareCheckBox} />
          4대 보험
        </S.InputList>
        <S.InputList>
          <S.Input type="checkbox" name="selfDevelop" checked={welfare.selfDevelop || false} onChange={onWelfareCheckBox} />
          자기 개발비
        </S.InputList>
        <S.InputList>
          <S.Input type="checkbox" name="laptop" checked={welfare.laptop || false} onChange={onWelfareCheckBox} />
          노트북 지원
        </S.InputList>
        <S.InputList>기타 (</S.InputList>
        <S.InputList>
          <S.Input type="text" name="etc" value={welfare.etc} onChange={onChangeInitData} />)
        </S.InputList>
      </S.Container>
      <S.Container flex={true}>
        <S.InputList>
          <S.Span>식비지원</S.Span>
        </S.InputList>
        <S.InputList>
          <S.Input type="checkbox" name="breakfast" checked={meal.breakfast || false} onChange={onMealCheckBox} />
          조식 제공
        </S.InputList>
        <S.InputList>
          <S.Input type="checkbox" name="lunch" checked={meal.lunch || false} onChange={onMealCheckBox} />
          중식 제공
        </S.InputList>
        <S.InputList>
          <S.Input type="checkbox" name="dinner" checked={meal.dinner || false} onChange={onMealCheckBox} />
          석식 제공
        </S.InputList>
        <S.InputList>
          <S.Input type="checkbox" name="includeSalary" checked={meal.includeSalary || false} onChange={onMealCheckBox} />
          수당 포함
        </S.InputList>
      </S.Container>
    </>
  );
};

export default WelfareInfo;
