import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../Common/PageTemplate/PageTemplate";
import * as S from "./DetailEmploy.style";
import * as E from "../EmployRequest/EmployRequest.style";
interface DetailEmployProps {}

const DetailEmploy = ({}: DetailEmployProps) => {
  return (
    <PageTemplate>
      <E.EmployContainer scroll={true}>
        <S.Container>
          <S.TextBox>
            <S.Title>베어런</S.Title>
            <S.Description>12345</S.Description>
            <S.Hr></S.Hr>
            <S.Text right={true}>2021.05.04까지</S.Text>
          </S.TextBox>

          <S.Text>기업 소개</S.Text>
          <S.CompanyBox>
            <S.Contents>
              베어런은 빅데이터 기반의 스포츠인 대상 생애주기 진로설계 및 경력 개발 프로그램으로 취업 지원 소외분야인 체육 전공자들에게 전문적인 컨설팅을 제공합니다. 스포츠인을 위한 진로 지도 경력개발 가이드와 함께 역량개발 성과 관리 및 커스텀 교육 쇼핑 서비스를 제공하는 최초의 모바일 플랫폼입니다
            </S.Contents>
          </S.CompanyBox>

          <S.Text>업무 내용</S.Text>
          <S.CompanyBox>
            <S.Contents>자바스크립트를 이용한 웹개발</S.Contents>
          </S.CompanyBox>

          <S.Text>자격 요건</S.Text>
          <S.CompanyBox>
            <S.CategoryBox>
              <S.Category>자격증</S.Category>
              <S.Category>성적</S.Category>
              <S.Category>특기사항</S.Category>
            </S.CategoryBox>
            <S.CategoryBox>
              <S.Contents>SQLD</S.Contents>
              <S.Contents>10%이내</S.Contents>
              <S.Contents>자바스크립트</S.Contents>
            </S.CategoryBox>
          </S.CompanyBox>

          <S.Text>근무 조건 및 복지</S.Text>
          <S.CompanyBox>
            <S.CategoryBox>
              <S.Category>급여</S.Category>
              <S.Category>실습 기간</S.Category>
              <S.Category>식비지원</S.Category>
              <S.Category>복지</S.Category>
            </S.CategoryBox>
            <S.CategoryBox>
              <S.Contents>1,000,000원</S.Contents>
              <S.Contents>3개월</S.Contents>
              <S.Contents>조식 제공</S.Contents>
              <S.Contents>4대 보험</S.Contents>
            </S.CategoryBox>
          </S.CompanyBox>

          <S.Text>기업 정보</S.Text>
          <S.CompanyBox>
            <S.CategoryBox>
              <S.Category>근로자 수</S.Category>
              <S.Category>연락처</S.Category>
              <S.Category>연 매출액</S.Category>
              <S.Category>주소</S.Category>
              <S.Category>설립 일자</S.Category>
              <S.Category>근무 시간</S.Category>
            </S.CategoryBox>
            <S.CategoryBox>
              <S.Contents>100명</S.Contents>
              <S.Contents>010 - 1234 -5678</S.Contents>
              <S.Contents>24억원</S.Contents>
              <S.Contents>서울시 강남구 역삼동</S.Contents>
              <S.Contents>2020.03.03</S.Contents>
              <S.Contents>10시 ~ 18시</S.Contents>
            </S.CategoryBox>
          </S.CompanyBox>

          <S.Text>기타</S.Text>
          <S.CompanyBox>
            <S.CategoryBox>
              <S.Category>모집 인원</S.Category>
              <S.Category>실습 후 채용 계획</S.Category>
              <S.Category>접수 일자</S.Category>
              <S.Category>첨부 파일</S.Category>
            </S.CategoryBox>
            <S.CategoryBox>
              <S.Contents>정보보안과 1명</S.Contents>
              <S.Contents>평가 후 일부 채용</S.Contents>
              <S.Contents>2020.03.03</S.Contents>
              <S.Contents>C:\Users\user\AppData\Local\Zeplin\app-4.1.0</S.Contents>
            </S.CategoryBox>
          </S.CompanyBox>
        </S.Container>
      </E.EmployContainer>
      <S.Container>
        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: `/edit/:id`,
          }}
        >
          <S.Button>수정</S.Button>
        </Link>
      </S.Container>
    </PageTemplate>
  );
};

export default DetailEmploy;
