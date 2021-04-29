import React from "react";
import * as S from "../RecruitNotice/RecruitNotice.style";
import { InitDataProps, OtherObjectProps, entInfoObjectProps } from "../../interfaces";
interface InitDataInfoProps {
  initData: InitDataProps;
  other: OtherObjectProps;
  entInfo: entInfoObjectProps;
  onChangeEntInfo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeInitData: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeOther: (e: React.ChangeEvent<HTMLInputElement>) => void;
  status: boolean;
  error: string;
}

const InitDataInfo: React.FC<InitDataInfoProps> = ({ entInfo, initData, other, onChangeInitData, onChangeOther, onChangeEntInfo, error, status }) => {
  return (
    <>
      <S.Container>
        <S.InputList>
          <S.Span point={true}>*</S.Span>
          <S.Span>모집 인원</S.Span>
        </S.InputList>
        <S.InputLine
          type="text"
          width="small"
          name="personnel"
          required
          value={other.personnel}
          onChange={onChangeOther}
          style={{ borderBottomColor: error === "personnel" && status === true ? "red" : "#e2e2e2" }}
        ></S.InputLine>
        <S.Span>명</S.Span>
      </S.Container>
      <S.Container flex={true}>
        <S.Container>
          <S.InputList>
            <S.Span point={true}>*</S.Span>
            <S.Span>업체명</S.Span>
          </S.InputList>
          <S.InputLine
            type="text"
            name="entName"
            required
            value={initData.entName}
            onChange={onChangeInitData}
            style={{ borderBottomColor: error === "name" && status === true ? "red" : "#e2e2e2" }}
          ></S.InputLine>
        </S.Container>
        <S.Container>
          <S.InputList>
            <S.Span point={true}>*</S.Span>
            <S.Span>사업자 번호</S.Span>
          </S.InputList>
          <S.InputLine
            type="text"
            name="entNo"
            required
            value={initData.entNo}
            onChange={onChangeInitData}
            placeholder="- 없이 입력(10자리)"
            style={{ borderBottomColor: error === "entNo" && status === true ? "red" : "#e2e2e2" }}
          ></S.InputLine>
        </S.Container>
        <S.Container>
          <S.InputList>
            <S.Span point={true}>*</S.Span>
            <S.Span>대표 연락처</S.Span>
          </S.InputList>
          <S.InputLine
            type="text"
            name="entPhone"
            required
            value={entInfo.entPhone}
            onChange={onChangeEntInfo}
            placeholder="- 없이 입력(10~11자리)"
            style={{ borderBottomColor: error === "phone" && status === true ? "red" : "#e2e2e2" }}
          ></S.InputLine>
        </S.Container>
      </S.Container>

      <S.Container flex={false}>
        <S.InputList>
          <S.Span point={true}>*</S.Span>
          <S.Span point={false}>회사소개</S.Span>
        </S.InputList>
        <S.TextArea
          required
          name="introduction"
          maxLength={1000}
          value={initData.introduction}
          onChange={onChangeInitData}
          style={{ borderColor: error === "introduce" && status === true ? "red" : "#e2e2e2" }}
        ></S.TextArea>
      </S.Container>
      <S.Container flex={false}>
        <S.InputList>
          <S.Span point={true}>*</S.Span>
          <S.Span point={false}>업무내용</S.Span>
          <S.TextArea
            required
            name="workContent"
            maxLength={255}
            value={initData.workContent}
            onChange={onChangeInitData}
            style={{ borderColor: error === "detail" && status === true ? "red" : "#e2e2e2" }}
          ></S.TextArea>
        </S.InputList>
      </S.Container>
    </>
  );
};

export default InitDataInfo;
