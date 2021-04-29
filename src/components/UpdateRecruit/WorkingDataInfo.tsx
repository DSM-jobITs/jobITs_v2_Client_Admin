import React from "react";
import * as S from "./../RecruitNotice/RecruitNotice.style";
import { WorkingObjectProps, entInfoObjectProps, DateProps } from "../../interfaces";
interface WorkingDataInfoProps {
  workingData: WorkingObjectProps;
  entInfo: entInfoObjectProps;
  deadline: DateProps;
  onChangeWorkingConditions: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDeadlineData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEntInfo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  status: boolean;
  error: string;
}

const WorkingDataInfo: React.FC<WorkingDataInfoProps> = ({
  workingData,
  entInfo,
  deadline,
  onChangeDeadlineData,
  onChangeEntInfo,
  onChangeWorkingConditions,
  status,
  error,
}) => {
  return (
    <>
      <S.Container flex={true}>
        <S.InputList>
          <S.Span point={true}>*</S.Span>
          <S.Span>실습수당 (월)</S.Span>
          <S.InputLine
            type="text"
            required
            name="allowance"
            value={workingData.allowance}
            onChange={onChangeWorkingConditions}
            style={{ borderBottomColor: error === "allowance" && status === true ? "red" : "#e2e2e2" }}
          ></S.InputLine>
          <S.Span>원</S.Span>
        </S.InputList>
        <S.InputList>
          <S.Span>채용 후 연봉</S.Span>
          <S.InputLine
            type="text"
            name="salary"
            value={workingData.salary}
            onChange={onChangeWorkingConditions}
            style={{ borderBottomColor: error === "salary" && status === true ? "red" : "#e2e2e2" }}
          ></S.InputLine>
          <S.Span>원</S.Span>
        </S.InputList>
        <S.InputList></S.InputList>
      </S.Container>

      <S.InputList>
        <S.Span point={true}>*</S.Span>
        <S.Span>근무시간</S.Span>
        <S.InputLine
          type="text"
          required
          name="startTime"
          width="small"
          value={entInfo.startTime}
          onChange={onChangeEntInfo}
          placeholder="hh:mm"
          style={{ borderBottomColor: error === "startTime" && status === true ? "red" : "#e2e2e2" }}
        ></S.InputLine>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~
        <S.InputLine
          type="text"
          required
          name="endTime"
          width="small"
          value={entInfo.endTime}
          onChange={onChangeEntInfo}
          placeholder="hh:mm"
          style={{ borderBottomColor: error === "endTime" && status === true ? "red" : "#e2e2e2" }}
        ></S.InputLine>
        까지
        <S.DescriptionSpan>※청소년은 1일에 7시간, 1주에 35시간을 초과하여 일할 수 없습니다.</S.DescriptionSpan>
      </S.InputList>

      <S.InputList>
        <S.Span point={true}>*</S.Span>
        <S.Span>실습기간</S.Span>
        <S.InputLine
          type="text"
          required
          name="period"
          width="small"
          value={workingData.period}
          onChange={onChangeWorkingConditions}
          style={{ borderBottomColor: error === "period" && status === true ? "red" : "#e2e2e2" }}
        ></S.InputLine>
        <S.Span>개월</S.Span>
        <S.DescriptionSpan>※ 실습기간은 최대 3개월 입니다</S.DescriptionSpan>
      </S.InputList>
      <S.Container flex={true}>
        <S.Container>
          <S.InputList>
            <S.Span point={true}>*</S.Span>
            <S.Span>마감일자</S.Span>
          </S.InputList>
          <S.InputLine
            type="text"
            required
            width="small"
            name="year"
            placeholder="xxxx"
            value={deadline.year}
            onChange={onChangeDeadlineData}
            style={{ borderBottomColor: error === "deadline" && status === true ? "red" : "#e2e2e2" }}
          ></S.InputLine>
          <S.Span point={false}>년</S.Span>
          <S.InputLine
            type="text"
            required
            width="small"
            name="month"
            placeholder="xx"
            value={deadline.month}
            onChange={onChangeDeadlineData}
            style={{ borderBottomColor: error === "deadline" && status === true ? "red" : "#e2e2e2" }}
          ></S.InputLine>
          <S.Span point={false}>월</S.Span>
          <S.InputLine
            type="text"
            width="small"
            required
            name="day"
            placeholder="xx"
            value={deadline.day}
            onChange={onChangeDeadlineData}
            style={{ borderBottomColor: error === "deadline" && status === true ? "red" : "#e2e2e2" }}
          ></S.InputLine>
          <S.Span point={false}>일</S.Span>
        </S.Container>
      </S.Container>
    </>
  );
};

export default WorkingDataInfo;
