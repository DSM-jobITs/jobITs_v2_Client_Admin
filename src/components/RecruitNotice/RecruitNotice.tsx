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
      personnel: Number(sw) + Number(em) + Number(info) + Number(every),
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
      reception: `${receptionYear}-${receptionMonth}-${receptionDate}`,
      deadline: `${deadlineYear}-${deadlineMonth}-${deadlineDate}`,
    });
  };

  const [inputs, setInputs] = useState({
    every: 0,
    sw: 0,
    info: 0,
    em: 0,
    name: "정보 없음",
    entNo: "정보 없음",
    phone: "정보 없음",
    sales: 0,
    sector: "정보 없음",
    workers: 0,
    address: "정보 없음",
    zipCode: "12345",
    managerRank: "정보 없음",
    managerPhone: "정보 없음",
    managerEmail: "정보 없음",
    introduce: "정보 없음",
    detail: "정보 없음",
    certificates: [],
    grade: 0,
    specialty: "정보 없음",
    startTime: "정보 없음",
    endTime: "정보 없음",
    salary: 0,
    period: 0,
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
    receptionYear: 2021,
    receptionMonth: 0,
    receptionDate: 0,
    deadlineYear: 2021,
    deadlineMonth: 0,
    deadlineDate: 0,
  });

  const {
    sw,
    em,
    info,
    every,
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
    receptionYear,
    receptionMonth,
    receptionDate,
    deadlineYear,
    deadlineMonth,
    deadlineDate,
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
              <S.Container flex={true}>
                <S.InputList>
                  <S.Span point={true}>*</S.Span>
                  <S.Span>모집인원</S.Span>
                </S.InputList>
                <S.InputList>
                  <S.Input type="checkbox" name="sw" value="sw" onChange={onCheckBoxInput} />
                  SW 개발과 (
                </S.InputList>
                <S.InputList>
                  <S.Input type="text" name="sw" onChange={onChangeInput} />) 명
                </S.InputList>
                <S.InputList>
                  <S.Input type="checkbox" name="em" value="em" onChange={onCheckBoxInput} />
                  임베디드과 (
                </S.InputList>
                <S.InputList>
                  <S.Input type="text" name="em" onChange={onChangeInput} />) 명
                </S.InputList>
                <S.InputList>
                  <S.Input type="checkbox" name="color" value="info" onChange={onCheckBoxInput} />
                  정보보안과 (
                </S.InputList>
                <S.InputList>
                  <S.Input type="text" name="info" onChange={onChangeInput} />) 명
                </S.InputList>
                <S.InputList>
                  <S.Input type="checkbox" name="color" value="none" onChange={onCheckBoxInput} />
                  학과무관 (
                </S.InputList>
                <S.InputList>
                  <S.Input type="text" name="every" onChange={onChangeInput} />) 명
                </S.InputList>
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
              </S.Container>
              <S.Container>
                <S.InputList>
                  <S.Span point={true}>*</S.Span>
                  <S.Span>연락처</S.Span>
                </S.InputList>
                <S.InputLine type="text" name="phone" onChange={onChangeInput} placeholder="xxx-xxx-xxxx"></S.InputLine>
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
              </S.Container>
              <S.Container>
                <S.InputList>
                  <S.Span point={true}>*</S.Span>
                  <S.Span>업종형태</S.Span>
                </S.InputList>
                <S.InputLine type="text" name="sector" onChange={onChangeInput}></S.InputLine>
              </S.Container>
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
              <S.Container flex={true}>
                <S.Container>
                  <S.InputList>
                    <S.Span point={true}>*</S.Span>
                    <S.Span>주소</S.Span>
                  </S.InputList>
                  <S.InputLine type="text" name="address" onChange={onChangeInput}></S.InputLine>
                </S.Container>
                <S.Container></S.Container>
              </S.Container>
              <S.Container>
                <S.InputList>
                  <S.Span point={true}>*</S.Span>
                  <S.Span>담당자 연락처</S.Span>
                </S.InputList>
                <S.InputLine type="text" placeholder="(직급)" name="managerRank" onChange={onChangeInput}></S.InputLine>
                <S.InputLine type="text" placeholder="전화번호 xxx-xxxx-xxxx" name="managerPhone" onChange={onChangeInput}></S.InputLine>
                <S.InputLine type="text" placeholder="이메일(이메일 형식으로 쓸 것)" name="managerEmail" onChange={onChangeInput}></S.InputLine>
              </S.Container>
            </S.InnerContainer>
          </S.RecruitContainer>
          <S.RecruitContainer height={true}>
            <S.InnerContainer>
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
            </S.InnerContainer>
          </S.RecruitContainer>
          <S.RecruitContainer>
            <S.InnerContainer>
              <S.Container flex={true}>
                <S.InputList>
                  <S.Span>자격요건</S.Span>
                  <S.InputLine type="text" name="certificates" onChange={onChangeInput} placeholder="(자격증)"></S.InputLine>
                  <S.InputLine type="text" name="grade" onChange={onChangeInput} placeholder="(성적) 0~100 %이내"></S.InputLine>
                  <S.InputLine type="text" name="specialty" maxLength={60} onChange={onChangeInput} placeholder="(특기사항)"></S.InputLine>
                </S.InputList>
              </S.Container>
              <S.InputList>
                <S.Span point={true}>*</S.Span>
                <S.Span>근무시간</S.Span>
                <S.InputLine type="text" name="startTime" width="small" onChange={onChangeInput} placeholder="hh:mm"></S.InputLine>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~
                <S.InputLine type="text" name="endTime" width="small" onChange={onChangeInput} placeholder="hh:mm"></S.InputLine>
              </S.InputList>
              <S.InputList>
                <S.Span point={true}>*</S.Span>
                <S.Span>급여</S.Span>
                <S.InputLine type="text" name="salary" onChange={onChangeInput}></S.InputLine>
                <S.Span>원</S.Span>
              </S.InputList>
              <S.InputList>
                <S.Span point={true}>*</S.Span>
                <S.Span>실습기간</S.Span>
                <S.InputLine type="text" name="period" onChange={onChangeInput}></S.InputLine>
                <S.Span>개월</S.Span>
              </S.InputList>
              <S.Container flex={true}>
                <S.InputList>
                  <S.Span point={true}>*</S.Span>
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
              <S.Container flex={true}>
                <S.InputList>
                  <S.Span point={true}>*</S.Span>
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
            </S.InnerContainer>
          </S.RecruitContainer>
          <S.RecruitContainer height={true}>
            <S.InnerContainer>
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
              <S.Container flex={false}>
                <S.InputList>
                  <S.Span point={true}>*</S.Span>
                  <S.Span>접수일자</S.Span>
                </S.InputList>
                <S.InputLine type="text" width="small" name="receptionYear" onChange={onChangeInput}></S.InputLine>
                <S.Span point={false}>년</S.Span>
                <S.InputLine type="text" width="small" name="receptionMonth" onChange={onChangeInput}></S.InputLine>
                <S.Span point={false}>월</S.Span>
                <S.InputLine type="text" width="small" name="receptionDate" onChange={onChangeInput}></S.InputLine>
                <S.Span point={false}>일</S.Span>
              </S.Container>
              <S.Container flex={false}>
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
              <S.InputList>
                <S.Span>첨부파일</S.Span>
                <S.Input type="file"></S.Input>
              </S.InputList>
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
