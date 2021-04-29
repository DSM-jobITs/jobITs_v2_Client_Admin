import React from "react";
import * as S from "./../RecruitNotice/RecruitNotice.style";
import { ManagerProps } from "../../interfaces";
interface ManagerInfoProps {
  manager: ManagerProps;
  onChangeManager: (e: React.ChangeEvent<HTMLInputElement>) => void;
  status: boolean;
  error: string;
}

const ManagerInfo: React.FC<ManagerInfoProps> = ({ manager, onChangeManager, status, error }) => {
  return (
    <>
      <S.Container flex={true} style={{ width: "100%" }}>
        <S.InputList>
          <S.Span point={true}>*</S.Span>
          <S.Span>담당자 연락처</S.Span>
        </S.InputList>
        <S.InputLine
          type="text"
          required
          placeholder="(직급)"
          name="managerRank"
          value={manager.managerRank}
          onChange={onChangeManager}
          style={{ borderBottomColor: error === "managerRank" && status === true ? "red" : "#e2e2e2" }}
        ></S.InputLine>
        <S.InputLine
          type="text"
          required
          placeholder="(담당자 이름)"
          name="managerName"
          value={manager.managerName}
          onChange={onChangeManager}
          style={{ borderBottomColor: error === "managerName" && status === true ? "red" : "#e2e2e2" }}
        ></S.InputLine>
        <S.InputLine
          type="text"
          required
          placeholder="(이메일)"
          name="managerEmail"
          value={manager.managerEmail}
          onChange={onChangeManager}
          style={{ borderBottomColor: error === "managerEmail" && status === true ? "red" : "#e2e2e2" }}
        ></S.InputLine>
        <S.InputLine
          type="text"
          required
          placeholder="(전화번호) - 없이 입력"
          name="managerPhone"
          value={manager.managerPhone}
          onChange={onChangeManager}
          style={{ borderBottomColor: error === "managerPhone" && status === true ? "red" : "#e2e2e2" }}
        ></S.InputLine>
      </S.Container>
    </>
  );
};

export default ManagerInfo;
