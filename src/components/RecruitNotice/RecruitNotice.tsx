import React, { useState } from "react";
import * as S from "./RecruitNotice.style";
import { Link } from "react-router-dom";
import { logo } from "../../assets/img";

interface RecruitNoticeProps {
  onRecruit: (data: object) => void;
}

const RecruitNotice: React.FC<RecruitNoticeProps> = ({ onRecruit }: RecruitNoticeProps) => {
  const onSubmitRecruit = () => {
    onRecruit({
      personnel: Number(person),
      name: name,
      entNo: entNo,
      phone: phone,
      sales: sales,
      sector: sector,
      establishmentDate: `${year}-${month}-${date}`,
      workers: workers,
      address: address,
      zipCode: zipCode,
      managerRank: managerRank,
      managerPhone: managerPhone,
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
  };

  const [inputs, setInputs] = useState({
    person: 0,
    name: "정보 없음",
    entNo: "정보 없음",
    phone: "정보 없음",
    sales: 0,
    sector: "정보통신업",
    workers: 0,
    address: "정보 없음",
    zipCode: "12345",
    managerRank: "정보 없음",
    managerPhone: "정보 없음",
    managerEmail: "정보 없음",
    managerName: "정보 없음",
    introduce: "정보 없음",
    detail: "정보 없음",
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
    reception: "정보 없음",
    deadline: "정보 없음",
    year: 2021,
    month: 0,
    date: 0,
    deadlineYear: 2021,
    deadlineMonth: 0,
    deadlineDate: 0,
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
    zipCode,
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
            <S.Logo src={logo}></S.Logo>
          </Link>
          <S.FileUploadContainer>
            <input type="file"></input>
            <S.FileUploadBox>
              <S.FileButton>확인</S.FileButton>
              <S.Text white={true}>( 파일 삽입 후 확인 버튼을 누를 시 자동으로 입력됩니다. )</S.Text>
            </S.FileUploadBox>
          </S.FileUploadContainer>
          <S.RecruitContainer>
            <S.InnerContainer>
              <S.Container>
                <S.InputList>
                  <S.Span point={true}>*</S.Span>
                  <S.Span>모집 인원</S.Span>
                </S.InputList>
                <S.InputLine type="text" width="small" name="person" onChange={onChangeInput}></S.InputLine>
                <S.Span>명</S.Span>
              </S.Container>
              <S.Container flex={true}>
                <S.Container>
                  <S.InputList>
                    <S.Span point={true}>*</S.Span>
                    <S.Span>업체명</S.Span>
                  </S.InputList>
                  <S.InputLine type="text" name="name" onChange={onChangeInput}></S.InputLine>
                </S.Container>
                <S.Container>
                  <S.InputList>
                    <S.Span point={true}>*</S.Span>
                    <S.Span>사업자 번호</S.Span>
                  </S.InputList>
                  <S.InputLine type="text" name="entNo" onChange={onChangeInput} placeholder="xxx-xx-xxxxx"></S.InputLine>
                </S.Container>
                <S.Container>
                  <S.InputList>
                    <S.Span point={true}>*</S.Span>
                    <S.Span>대표 연락처</S.Span>
                  </S.InputList>
                  <S.InputLine type="text" name="phone" onChange={onChangeInput} placeholder="xxx-xxx-xxxx"></S.InputLine>
                </S.Container>
              </S.Container>

              <S.Container flex={true}>
                <S.Container>
                  <S.InputList>
                    <S.Span point={true}>*</S.Span>
                    <S.Span>연매출액</S.Span>
                  </S.InputList>
                  <S.InputLine type="text" name="sales" onChange={onChangeInput}></S.InputLine>
                  <S.Span>억</S.Span>
                </S.Container>
                <S.Container>
                  <S.InputList>
                    <S.Span point={true}>*</S.Span>
                    <S.Span>근로자수</S.Span>
                  </S.InputList>
                  <S.InputLine type="text" name="workers" onChange={onChangeInput}></S.InputLine>
                  <S.Span>명</S.Span>
                </S.Container>
                <S.Container>
                  <S.InputList>
                    <S.Span point={true}>*</S.Span>
                    <S.Span>업종</S.Span>
                  </S.InputList>
                  <S.InputLine type="text" name="sector" value={sector} onChange={onChangeInput}></S.InputLine>
                </S.Container>
              </S.Container>

              <S.Container flex={true}>
                <S.Container>
                  <S.InputList>
                    <S.Span point={true}>*</S.Span>
                    <S.Span>설립일자</S.Span>
                  </S.InputList>
                  <S.InputLine type="text" width="small" name="year" onChange={onChangeInput}></S.InputLine>
                  <S.Span>년</S.Span>
                  <S.InputLine type="text" width="small" name="month" onChange={onChangeInput}></S.InputLine>
                  <S.Span>월</S.Span>
                  <S.InputLine type="text" width="small" name="date" onChange={onChangeInput}></S.InputLine>
                  <S.Span>일</S.Span>
                </S.Container>
                <S.Container>
                  <S.InputList>
                    <S.Span point={true}>*</S.Span>
                    <S.Span>주소</S.Span>
                  </S.InputList>
                  <S.CustomInputLine type="text" name="address" onChange={onChangeInput} width={"22"}></S.CustomInputLine>
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

              <S.Container>
                <S.InputList>
                  <S.Span point={true}>*</S.Span>
                  <S.Span>담당자 연락처</S.Span>
                </S.InputList>
                <S.InputLine type="text" placeholder="(직급)" name="managerRank" onChange={onChangeInput}></S.InputLine>
                <S.InputLine type="text" placeholder="(전화번호)" name="managerPhone" onChange={onChangeInput}></S.InputLine>
                <S.InputLine type="text" placeholder="(이메일)" name="managerEmail" onChange={onChangeInput}></S.InputLine>
                <S.InputLine type="text" placeholder="(담당자 이름)" name="managerName" onChange={onChangeInput}></S.InputLine>
              </S.Container>
              <S.Container flex={true}>
                <S.InputList>
                  <S.Span>자격요건</S.Span>
                  <S.InputLine type="text" name="certificates" onChange={onChangeInput} placeholder="(자격증)"></S.InputLine>
                  <S.InputLine type="text" name="grade" onChange={onChangeInput} placeholder="(성적) 0~100 %이내"></S.InputLine>
                  <S.CustomInputLine
                    type="text"
                    name="specialty"
                    maxLength={60}
                    width={"25"}
                    onChange={onChangeInput}
                    placeholder="(특기사항)"
                  ></S.CustomInputLine>
                </S.InputList>
              </S.Container>
              <S.Container flex={true}>
                <S.InputList>
                  <S.Span point={true}>*</S.Span>
                  <S.Span>실습수당 (월)</S.Span>
                  <S.InputLine type="text" name="allowance" onChange={onChangeInput}></S.InputLine>
                  <S.Span>원</S.Span>
                </S.InputList>
                <S.InputList>
                  <S.Span>채용 후 연봉</S.Span>
                  <S.InputLine type="text" name="salary" onChange={onChangeInput}></S.InputLine>
                  <S.Span>원</S.Span>
                </S.InputList>
                <S.InputList></S.InputList>
              </S.Container>

              <S.InputList>
                <S.Span point={true}>*</S.Span>
                <S.Span>근무시간</S.Span>
                <S.InputLine type="text" name="startTime" width="small" value={startTime} onChange={onChangeInput} placeholder="hh:mm"></S.InputLine>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~
                <S.InputLine type="text" name="endTime" width="small" value={endTime} onChange={onChangeInput} placeholder="hh:mm"></S.InputLine>까지
                <S.DescriptionSpan>※청소년은 1일에 7시간, 1주에 35시간을 초과하여 일할 수 없습니다.</S.DescriptionSpan>
              </S.InputList>

              <S.InputList>
                <S.Span point={true}>*</S.Span>
                <S.Span>실습기간</S.Span>
                <S.InputLine type="text" name="period" width="small" value={period} onChange={onChangeInput}></S.InputLine>
                <S.Span>개월</S.Span>
                <S.DescriptionSpan>※ 실습기간은 최대 3개월 입니다</S.DescriptionSpan>
              </S.InputList>
              <S.Container flex={true}>
                <S.Container>
                  <S.InputList>
                    <S.Span point={true}>*</S.Span>
                    <S.Span>마감일자</S.Span>
                  </S.InputList>
                  <S.InputLine type="text" width="small" name="deadlineYear" onChange={onChangeInput}></S.InputLine>
                  <S.Span point={false}>년</S.Span>
                  <S.InputLine type="text" width="small" name="deadlineMonth" onChange={onChangeInput}></S.InputLine>
                  <S.Span point={false}>월</S.Span>
                  <S.InputLine type="text" width="small" name="deadlineDate" onChange={onChangeInput}></S.InputLine>
                  <S.Span point={false}>일</S.Span>
                </S.Container>
              </S.Container>

              <S.InputList>
                <S.Span>첨부파일</S.Span>
                <S.Input type="file"></S.Input>
              </S.InputList>

              <S.Container flex={false}>
                <S.InputList>
                  <S.Span point={true}>*</S.Span>
                  <S.Span point={false}>회사소개</S.Span>
                </S.InputList>
                <S.TextArea name="introduce" maxLength={255} onChange={onChangeInput}></S.TextArea>
              </S.Container>
              <S.Container flex={false}>
                <S.InputList>
                  <S.Span point={true}>*</S.Span>
                  <S.Span point={false}>업무내용</S.Span>
                  <S.TextArea name="detail" maxLength={255} onChange={onChangeInput}></S.TextArea>
                </S.InputList>
              </S.Container>

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
