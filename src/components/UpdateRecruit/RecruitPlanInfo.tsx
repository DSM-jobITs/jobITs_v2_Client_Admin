import React from "react";
import * as S from "./../RecruitNotice/RecruitNotice.style";
import { OtherObjectProps } from "../../interfaces";
interface RecruitPlanInfoProps {
  other: OtherObjectProps;
  onReception: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RecruitPlanInfo: React.FC<RecruitPlanInfoProps> = ({ other, onReception }) => {
  return (
    <>
      <S.Container flex={true}>
        <S.InputList>
          <S.Span point={true}>*</S.Span>
          <S.Span>실습 후 채용 계획</S.Span>
        </S.InputList>
        <S.InputList>
          <S.Input type="checkbox" name="recruitPlan" checked={other.recruitPlan || false} onChange={onReception} />
          결격사유 없을 시 전원채용
        </S.InputList>
        <S.InputList>
          <S.Input
            type="checkbox"
            name="notRecruitPlan"
            id="recruitPlan"
            checked={other.recruitPlan === false ? true : false}
            onChange={onReception}
          />
          평가 후 일부 채용
        </S.InputList>
      </S.Container>
    </>
  );
};

export default RecruitPlanInfo;
