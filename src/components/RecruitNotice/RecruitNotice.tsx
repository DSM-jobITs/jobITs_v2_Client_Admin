import React, { useState } from "react";
import * as S from "./RecruitNotice.style";
import { Link } from "react-router-dom";
import { greenLogo } from "../../assets/img";

interface RecruitNoticeProps {
  onRecruit: (data: object) => void;
  onFileRecruit: (data: FormData, no: string) => void;
  status: boolean;
  error: string;
}

const RecruitNotice: React.FC<RecruitNoticeProps> = ({ onRecruit, onFileRecruit, status, error }: RecruitNoticeProps) => {
  const [file, setFile] = useState<any | null>([]);
  const onSubmitRecruit = () => {
    onRecruit({
      personnel: Number(person),
      name: name,
      entNo: entNo.replace(/(\d{3})(\d{2})(\d{5})/, "$1-$2-$3"),
      phone: phone.length === 10 ? phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3") : phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"),
      sales: sales,
      sector: sector,
      establishmentDate: `${year}-${month}-${date}`,
      workers: workers,
      address: address,
      managerRank: managerRank,
      managerPhone: managerPhone.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, "$1-$2-$3"),
      managerEmail: managerEmail,
      managerName: managerName,
      introduce: introduce,
      detail: detail,
      certificates: [certificates],
      grade: grade,
      specialty: specialty,
      startTime: startTime,
      endTime: endTime,
      salary: salary,
      period: period,
      breakfast: breakfast,
      lunch: lunch,
      dinner: dinner,
      mealSalary: mealSalary,
      fourMajor: fourMajor,
      selfDevelop: selfDevelop,
      labtop: labtop,
      etc: etc,
      recruitPlan: recruitPlan,
      deadline: `${deadlineYear}-${deadlineMonth}-${deadlineDate}`,
      allowance: allowance,
    });
    if (file !== null) {
      let forms = new FormData();
      forms.append("files", file[0]);
      onFileRecruit(forms, entNo);
    }
  };

  const [inputs, setInputs] = useState({
    person: 0,
    name: "",
    entNo: "",
    phone: "",
    sales: 0,
    sector: "정보통신업",
    workers: 0,
    address: "",
    managerRank: "",
    managerPhone: "",
    managerEmail: "",
    managerName: "",
    introduce: "",
    detail: "",
    certificates: "무관",
    grade: 0,
    specialty: "정보 없음",
    startTime: "09:00",
    endTime: "17:00",
    salary: 0,
    period: 3,
    breakfast: false,
    lunch: false,
    dinner: false,
    mealSalary: false,
    fourMajor: false,
    selfDevelop: false,
    labtop: false,
    recruitPlan: false,
    etc: "정보 없음",
    deadline: "정보 없음",
    year: "",
    month: "",
    date: "",
    deadlineYear: "",
    deadlineMonth: "",
    deadlineDate: "",
    allowance: 0,
  });

  const {
    person,
    name,
    entNo,
    phone,
    sales,
    sector,
    workers,
    address,
    managerRank,
    managerPhone,
    managerEmail,
    managerName,
    introduce,
    detail,
    certificates,
    grade,
    specialty,
    startTime,
    endTime,
    salary,
    period,
    breakfast,
    lunch,
    dinner,
    mealSalary,
    fourMajor,
    selfDevelop,
    labtop,
    recruitPlan,
    etc,
    year,
    month,
    date,
    deadlineYear,
    deadlineMonth,
    deadlineDate,
    allowance,
  } = inputs;

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    setFile(files);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onCheckBoxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { isTrusted } = e;
    const { name } = e.target;
    setInputs({
      ...inputs,
      [name]: isTrusted,
    });
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
          {/* <S.FileUploadContainer>
            <input type="file"></input>
            <S.FileUploadBox>
              <S.FileButton>확인</S.FileButton>
              <S.Text white={true}>( 파일 삽입 후 확인 버튼을 누를 시 자동으로 입력됩니다. )</S.Text>
            </S.FileUploadBox>
          </S.FileUploadContainer> */}
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
                  name="person"
                  onChange={onChangeInput}
                  style={{
                    borderBottomColor: (!person || person > 9 || isNaN(person) || error === "personnel") && status === true ? "red" : "#e2e2e2",
                  }}
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
                    name="name"
                    onChange={onChangeInput}
                    style={{ borderBottomColor: name === "" && status === true && error === "name" ? "red" : "#e2e2e2" }}
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
                    onChange={onChangeInput}
                    placeholder="- 없이 입력(10자리)"
                    style={{ borderBottomColor: (!entNo || entNo.length !== 10 || error === "entNo") && status === true ? "red" : "#e2e2e2" }}
                  ></S.InputLine>
                </S.Container>
                <S.Container>
                  <S.InputList>
                    <S.Span point={true}>*</S.Span>
                    <S.Span>대표 연락처</S.Span>
                  </S.InputList>
                  <S.InputLine
                    type="text"
                    name="phone"
                    onChange={onChangeInput}
                    placeholder="- 없이 입력(10~11자리)"
                    style={{ borderBottomColor: (!phone || phone.length !== 10 || error === "phone") && status === true ? "red" : "#e2e2e2" }}
                  ></S.InputLine>
                </S.Container>
              </S.Container>

              <S.Container flex={false}>
                <S.InputList>
                  <S.Span point={true}>*</S.Span>
                  <S.Span point={false}>회사소개</S.Span>
                </S.InputList>
                <S.TextArea
                  name="introduce"
                  maxLength={255}
                  onChange={onChangeInput}
                  style={{ borderColor: (introduce.length === 0 || error === "introduce") && status === true ? "red" : "#e2e2e2" }}
                ></S.TextArea>
              </S.Container>
              <S.Container flex={false}>
                <S.InputList>
                  <S.Span point={true}>*</S.Span>
                  <S.Span point={false}>업무내용</S.Span>
                  <S.TextArea
                    name="detail"
                    maxLength={255}
                    onChange={onChangeInput}
                    style={{ borderColor: (detail.length === 0 || error === "detail") && status === true ? "red" : "#e2e2e2" }}
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
                    name="sales"
                    onChange={onChangeInput}
                    style={{ borderBottomColor: (!sales || sales === 0 || isNaN(sales) || error === "sales") && status === true ? "red" : "#e2e2e2" }}
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
                    name="workers"
                    onChange={onChangeInput}
                    style={{ borderBottomColor: (!workers || isNaN(workers) || error === "workers") && status === true ? "red" : "#e2e2e2" }}
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
                    name="sector"
                    value={sector}
                    onChange={onChangeInput}
                    style={{ borderBottomColor: (!sector || error === "sector") && status === true ? "red" : "#e2e2e2" }}
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
                    placeholder="xxxx"
                    onChange={onChangeInput}
                    style={{
                      borderBottomColor: (!year || year.length !== 4 || error === "establishmentDate") && status === true ? "red" : "#e2e2e2",
                    }}
                  ></S.InputLine>
                  <S.Span>년</S.Span>
                  <S.InputLine
                    type="text"
                    width="small"
                    name="month"
                    placeholder="xx"
                    onChange={onChangeInput}
                    style={{
                      borderBottomColor: (!month || month.length !== 2 || error === "establishmentDate") && status === true ? "red" : "#e2e2e2",
                    }}
                  ></S.InputLine>
                  <S.Span>월</S.Span>
                  <S.InputLine
                    type="text"
                    width="small"
                    name="date"
                    placeholder="xx"
                    onChange={onChangeInput}
                    style={{
                      borderBottomColor: (!date || date.length !== 2 || error === "establishmentDate") && status === true ? "red" : "#e2e2e2",
                    }}
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
                    onChange={onChangeInput}
                    width={"22"}
                    style={{ borderBottomColor: (!address || error === "address") && status === true ? "red" : "#e2e2e2" }}
                  ></S.CustomInputLine>
                </S.Container>
                <S.Container></S.Container>
              </S.Container>

              <S.Container flex={true}>
                <S.InputList>
                  <S.Span>복지</S.Span>
                </S.InputList>
                <S.InputList>
                  <S.Input type="checkbox" name="fourMajor" onChange={onCheckBoxInput} />
                  4대 보험
                </S.InputList>
                <S.InputList>
                  <S.Input type="checkbox" name="selfDevelop" onChange={onCheckBoxInput} />
                  자기 개발비
                </S.InputList>
                <S.InputList>
                  <S.Input type="checkbox" name="labtop" onChange={onCheckBoxInput} />
                  노트북 지원
                </S.InputList>
                <S.InputList>
                  <S.Input type="checkbox" />
                  기타 (
                </S.InputList>
                <S.InputList>
                  <S.Input type="text" name="etc" onChange={onChangeInput} />)
                </S.InputList>
              </S.Container>
              <S.Container flex={true}>
                <S.InputList>
                  <S.Span>식비지원</S.Span>
                </S.InputList>
                <S.InputList>
                  <S.Input type="checkbox" name="breakfast" onChange={onCheckBoxInput} />
                  조식 제공
                </S.InputList>
                <S.InputList>
                  <S.Input type="checkbox" name="lunch" onChange={onCheckBoxInput} />
                  중식 제공
                </S.InputList>
                <S.InputList>
                  <S.Input type="checkbox" name="dinner" onChange={onCheckBoxInput} />
                  석식 제공
                </S.InputList>
                <S.InputList>
                  <S.Input type="checkbox" name="mealSalary" onChange={onCheckBoxInput} />
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
                  placeholder="(직급)"
                  name="managerRank"
                  onChange={onChangeInput}
                  style={{ borderBottomColor: (!managerRank || error === "managerRank") && status === true ? "red" : "#e2e2e2" }}
                ></S.InputLine>
                <S.InputLine
                  type="text"
                  placeholder="(전화번호) - 없이 입력"
                  name="managerPhone"
                  onChange={onChangeInput}
                  style={{ borderBottomColor: (!managerPhone || error === "managerPhone") && status === true ? "red" : "#e2e2e2" }}
                ></S.InputLine>
                <S.InputLine
                  type="text"
                  placeholder="(이메일)"
                  name="managerEmail"
                  onChange={onChangeInput}
                  style={{
                    borderBottomColor:
                      (!managerEmail ||
                        // eslint-disable-next-line
                        !/^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/.test(managerEmail) ||
                        error === "managerEmail") &&
                      status === true
                        ? "red"
                        : "#e2e2e2",
                  }}
                ></S.InputLine>
                <S.InputLine
                  type="text"
                  placeholder="(담당자 이름)"
                  name="managerName"
                  onChange={onChangeInput}
                  style={{ borderBottomColor: (!managerName || error === "managerName") && status === true ? "red" : "#e2e2e2" }}
                ></S.InputLine>
              </S.Container>
              <S.Container flex={true}>
                <S.InputList>
                  <S.Span>자격요건</S.Span>
                  <S.InputLine type="text" name="certificates" onChange={onChangeInput} placeholder="(자격증)"></S.InputLine>
                  <S.InputLine
                    type="text"
                    name="grade"
                    onChange={onChangeInput}
                    placeholder="(성적) 0~100 %이내"
                    style={{ borderBottomColor: (grade > 100 || 0 > grade || error === "grade") && status === true ? "red" : "#e2e2e2" }}
                  ></S.InputLine>
                  <S.CustomInputLine
                    type="text"
                    name="specialty"
                    maxLength={60}
                    width={"25"}
                    onChange={onChangeInput}
                    style={{ borderBottomColor: error === "specialty" && status === true ? "red" : "#e2e2e2" }}
                    placeholder="(특기사항)"
                  ></S.CustomInputLine>
                </S.InputList>
              </S.Container>
              <S.Container flex={true}>
                <S.InputList>
                  <S.Span point={true}>*</S.Span>
                  <S.Span>실습수당 (월)</S.Span>
                  <S.InputLine
                    type="text"
                    name="allowance"
                    onChange={onChangeInput}
                    style={{ borderBottomColor: (!allowance || isNaN(allowance) || error === "allowance") && status === true ? "red" : "#e2e2e2" }}
                  ></S.InputLine>
                  <S.Span>원</S.Span>
                </S.InputList>
                <S.InputList>
                  <S.Span>채용 후 연봉</S.Span>
                  <S.InputLine
                    type="text"
                    name="salary"
                    onChange={onChangeInput}
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
                  name="startTime"
                  width="small"
                  value={startTime}
                  onChange={onChangeInput}
                  placeholder="hh:mm"
                  style={{
                    borderBottomColor: (!startTime || startTime.length !== 5 || error === "startTime") && status === true ? "red" : "#e2e2e2",
                  }}
                ></S.InputLine>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~
                <S.InputLine
                  type="text"
                  name="endTime"
                  width="small"
                  value={endTime}
                  onChange={onChangeInput}
                  placeholder="hh:mm"
                  style={{ borderBottomColor: (!endTime || endTime.length !== 5 || error === "endTime") && status === true ? "red" : "#e2e2e2" }}
                ></S.InputLine>
                까지
                <S.DescriptionSpan>※청소년은 1일에 7시간, 1주에 35시간을 초과하여 일할 수 없습니다.</S.DescriptionSpan>
              </S.InputList>

              <S.InputList>
                <S.Span point={true}>*</S.Span>
                <S.Span>실습기간</S.Span>
                <S.InputLine
                  type="text"
                  name="period"
                  width="small"
                  value={period}
                  onChange={onChangeInput}
                  style={{ borderBottomColor: (period > 3 || isNaN(period) || !period || error === "period") && status === true ? "red" : "#e2e2e2" }}
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
                    width="small"
                    name="deadlineYear"
                    placeholder="xxxx"
                    onChange={onChangeInput}
                    style={{
                      borderBottomColor: (!deadlineYear || deadlineYear.length !== 4 || error === "deadline") && status === true ? "red" : "#e2e2e2",
                    }}
                  ></S.InputLine>
                  <S.Span point={false}>년</S.Span>
                  <S.InputLine
                    type="text"
                    width="small"
                    name="deadlineMonth"
                    placeholder="xx"
                    onChange={onChangeInput}
                    style={{
                      borderBottomColor:
                        (!deadlineMonth || deadlineMonth.length !== 2 || error === "deadline") && status === true ? "red" : "#e2e2e2",
                    }}
                  ></S.InputLine>
                  <S.Span point={false}>월</S.Span>
                  <S.InputLine
                    type="text"
                    width="small"
                    name="deadlineDate"
                    placeholder="xx"
                    onChange={onChangeInput}
                    style={{
                      borderBottomColor: (!deadlineDate || deadlineDate.length !== 2 || error === "deadline") && status === true ? "red" : "#e2e2e2",
                    }}
                  ></S.InputLine>
                  <S.Span point={false}>일</S.Span>
                </S.Container>
              </S.Container>

              <S.InputList>
                <S.Span>첨부파일</S.Span>
                <S.Input type="file" name="file" onChange={onFile}></S.Input>
              </S.InputList>

              {/* <S.Container flex={false}>
                <S.InputList>
                  <S.Span point={true}>*</S.Span>
                  <S.Span point={false}>회사소개</S.Span>
                </S.InputList>
                <S.TextArea
                  name="introduce"
                  maxLength={255}
                  onChange={onChangeInput}
                  style={{ borderColor: (introduce.length === 0 || error === "introduce") && status === true ? "red" : "#e2e2e2" }}
                ></S.TextArea>
              </S.Container>
              <S.Container flex={false}>
                <S.InputList>
                  <S.Span point={true}>*</S.Span>
                  <S.Span point={false}>업무내용</S.Span>
                  <S.TextArea
                    name="detail"
                    maxLength={255}
                    onChange={onChangeInput}
                    style={{ borderColor: (detail.length === 0 || error === "detail") && status === true ? "red" : "#e2e2e2" }}
                  ></S.TextArea>
                </S.InputList>
              </S.Container> */}

              <S.Container flex={true}>
                <S.InputList>
                  <S.Span point={true}>*</S.Span>
                  <S.Span>실습 후 채용 계획</S.Span>
                </S.InputList>
                <S.InputList>
                  <S.Input type="checkbox" name="recruitPlan" onChange={onCheckBoxInput} />
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
            <S.CancelButton>취소</S.CancelButton>
            <S.NextButton onClick={onSubmitRecruit}>등록하기</S.NextButton>
          </S.ButtonContainer>
        </S.Container>
      </S.AllContainer>
    </>
  );
};

export default RecruitNotice;
