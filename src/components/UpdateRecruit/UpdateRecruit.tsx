import React, { useState } from "react";
import * as S from "./../RecruitNotice/RecruitNotice.style";
import { Link } from "react-router-dom";
import { greenLogo } from "../../assets/img";
import {
  InitDataProps,
  WorkingObjectProps,
  QualificationProps,
  MealProps,
  WelfareProps,
  entInfoObjectProps,
  OtherObjectProps,
  ManagerProps,
  DateProps,
} from "../../interfaces";

interface UpdateRecruitProps {
  onUpdateRecruit: () => void;
  initData: InitDataProps;
  workingData: WorkingObjectProps;
  qualification: QualificationProps;
  meal: MealProps;
  welfare: WelfareProps;
  entInfo: entInfoObjectProps;
  other: OtherObjectProps;
  manager: ManagerProps;
  establishment: DateProps;
  deadline: DateProps;
  onFileRecruit: (data: FormData, no: string) => void;
  onReception: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDeadlineData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onWelfareCheckBox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMealCheckBox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEntInfo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEstablishment: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeQualification: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeOther: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeManager: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeWorkingConditions: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeInitData: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  status: boolean;
  error: string;
}

const UpdateRecruit: React.FC<UpdateRecruitProps> = ({
  onUpdateRecruit,
  initData,
  onFileRecruit,
  workingData,
  qualification,
  meal,
  welfare,
  deadline,
  establishment,
  other,
  entInfo,
  status,
  error,
  manager,
  onChangeEstablishment,
  onReception,
  onChangeDeadlineData,
  onChangeInitData,
  onChangeEntInfo,
  onChangeQualification,
  onChangeOther,
  onChangeManager,
  onChangeWorkingConditions,
  onMealCheckBox,
  onWelfareCheckBox,
}) => {
  const [file, setFile] = useState<any | null>([]);
  const onSubmitData = () => {
    onUpdateRecruit();
    if (!!file) {
      let forms = new FormData();
      forms.append("files", file[0]);
      onFileRecruit(forms, initData.entNo);
    }
  };

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    setFile(files);
  };

  return (
    <>
      <S.AllContainer>
        <S.Container>
          <Link
            style={{ textDecoration: "none" }}
            to={{
              pathname: `/employ`,
            }}
          >
            <S.Logo src={greenLogo}></S.Logo>
          </Link>
          <S.RecruitContainer>
            <S.InnerContainer>
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
              <S.Container flex={true}>
                <S.InputList>
                  <S.Span point={true}>*</S.Span>
                  <S.Span>실습수당 (월)</S.Span>
                  <S.InputLine
                    type="text"
                    required
                    name="allowance"
                    value={workingData.allowance}
                    onChange={onChangeQualification}
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

              <S.InputList>
                <S.Span>첨부파일</S.Span>
                <S.Input type="file" name="file" onChange={onFile}></S.Input>
              </S.InputList>

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
                  <S.Input type="checkbox" />
                  평가 후 일부 채용
                </S.InputList>
              </S.Container>
            </S.InnerContainer>
          </S.RecruitContainer>
          <S.ButtonContainer>
            <Link to="/employ">
              <S.CancelButton>취소</S.CancelButton>
            </Link>
            <S.NextButton onClick={onSubmitData}>등록하기</S.NextButton>
          </S.ButtonContainer>
        </S.Container>
      </S.AllContainer>
    </>
  );
};

export default UpdateRecruit;
