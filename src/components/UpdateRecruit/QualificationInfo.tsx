import React from "react";
import * as S from "../RecruitNotice/RecruitNotice.style";
import { QualificationProps } from "../../interfaces";
interface QualificationInfoProps {
  qualification: QualificationProps;
  status: boolean;
  error: string;
  onChangeQualification: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const QualificationInfo: React.FC<QualificationInfoProps> = ({ qualification, status, error, onChangeQualification }) => {
  return (
    <>
      <S.Container flex={true}>
        <S.InputList>
          <S.Span>자격요건</S.Span>
          <S.InputLine
            type="text"
            name="certificate"
            value={qualification.certificate}
            onChange={onChangeQualification}
            placeholder="(자격증)"
            style={{ borderBottomColor: error === "certificates" && status === true ? "red" : "#e2e2e2" }}
          ></S.InputLine>
          <S.InputLine
            type="text"
            name="grade"
            value={qualification.grade}
            onChange={onChangeQualification}
            placeholder="(성적) 0~100 %이내"
            style={{ borderBottomColor: error === "grade" && status === true ? "red" : "#e2e2e2" }}
          ></S.InputLine>
          <S.CustomInputLine
            type="text"
            name="specialty"
            maxLength={60}
            width={"25"}
            value={qualification.specialty}
            onChange={onChangeQualification}
            placeholder="(특기사항)"
            style={{ borderBottomColor: error === "specialty" && status === true ? "red" : "#e2e2e2" }}
          ></S.CustomInputLine>
        </S.InputList>
      </S.Container>
    </>
  );
};

export default QualificationInfo;
