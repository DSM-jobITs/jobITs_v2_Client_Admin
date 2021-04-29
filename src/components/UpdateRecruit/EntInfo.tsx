import React from "react";
import * as S from "./../RecruitNotice/RecruitNotice.style";
import { InitDataProps, entInfoObjectProps, DateProps } from "../../interfaces";

interface EntInfoProps {
  initData: InitDataProps;
  establishment: DateProps;
  entInfo: entInfoObjectProps;
  onChangeEntInfo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEstablishment: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeInitData: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  status: boolean;
  error: string;
}

const EntInfo: React.FC<EntInfoProps> = ({
  initData,
  establishment,
  entInfo,
  onChangeEntInfo,
  onChangeEstablishment,
  onChangeInitData,
  status,
  error,
}) => {
  return (
    <>
      <S.Container flex={true}>
        <S.Container>
          <S.InputList>
            <S.Span point={true}>*</S.Span>
            <S.Span>연매출액</S.Span>
          </S.InputList>
          <S.InputLine
            type="text"
            name="entSales"
            required
            value={entInfo.entSales}
            onChange={onChangeEntInfo}
            style={{ borderBottomColor: error === "sales" && status === true ? "red" : "#e2e2e2" }}
          ></S.InputLine>
          <S.Span>억</S.Span>
        </S.Container>
        <S.Container>
          <S.InputList>
            <S.Span point={true}>*</S.Span>
            <S.Span>근로자수</S.Span>
          </S.InputList>
          <S.InputLine
            type="text"
            name="numOfWorker"
            required
            value={entInfo.numOfWorker}
            onChange={onChangeEntInfo}
            style={{ borderBottomColor: error === "workers" && status === true ? "red" : "#e2e2e2" }}
          ></S.InputLine>
          <S.Span>명</S.Span>
        </S.Container>
        <S.Container>
          <S.InputList>
            <S.Span point={true}>*</S.Span>
            <S.Span>업종</S.Span>
          </S.InputList>
          <S.InputLine
            type="text"
            required
            name="sector"
            value={initData.sector}
            onChange={onChangeInitData}
            style={{ borderBottomColor: error === "sector" && status === true ? "red" : "#e2e2e2" }}
          ></S.InputLine>
        </S.Container>
      </S.Container>

      <S.Container flex={true}>
        <S.Container>
          <S.InputList>
            <S.Span point={true}>*</S.Span>
            <S.Span>설립일자</S.Span>
          </S.InputList>
          <S.InputLine
            type="text"
            width="small"
            name="year"
            required
            placeholder="xxxx"
            value={establishment.year}
            onChange={onChangeEstablishment}
            style={{ borderBottomColor: error === "establishmentDate" && status === true ? "red" : "#e2e2e2" }}
          ></S.InputLine>
          <S.Span>년</S.Span>
          <S.InputLine
            type="text"
            width="small"
            name="month"
            value={establishment.month}
            required
            placeholder="xx"
            onChange={onChangeEstablishment}
            style={{ borderBottomColor: error === "establishmentDate" && status === true ? "red" : "#e2e2e2" }}
          ></S.InputLine>
          <S.Span>월</S.Span>
          <S.InputLine
            type="text"
            width="small"
            name="day"
            value={establishment.day}
            required
            placeholder="xx"
            onChange={onChangeEstablishment}
            style={{ borderBottomColor: error === "establishmentDate" && status === true ? "red" : "#e2e2e2" }}
          ></S.InputLine>
          <S.Span>일</S.Span>
        </S.Container>
        <S.Container>
          <S.InputList>
            <S.Span point={true}>*</S.Span>
            <S.Span>주소</S.Span>
          </S.InputList>
          <S.CustomInputLine
            type="text"
            name="address"
            required
            value={entInfo.address}
            onChange={onChangeEntInfo}
            width={"22"}
            style={{ borderBottomColor: error === "address" && status === true ? "red" : "#e2e2e2" }}
          ></S.CustomInputLine>
        </S.Container>
        <S.Container></S.Container>
      </S.Container>
    </>
  );
};

export default EntInfo;
