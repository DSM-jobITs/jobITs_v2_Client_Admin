import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import PageTemplate from "../Common/PageTemplate/PageTemplate";
import * as S from "./DetailEmploy.style";
import * as E from "../EmployRequest/EmployRequest.style";
interface DetailEmployProps {
  entName: string;
  entNo: string;
  introduction: string;
  deadline: string;
  workContent: string;
  children?: ReactNode;
}

const DetailEmploy = ({ entName, entNo, introduction, deadline, workContent, children }: DetailEmployProps) => {
  const location = useLocation();
  const id = location.pathname.split("/");

  return (
    <PageTemplate>
      <E.EmployContainer scroll={true}>
        <S.Container>
          <S.TextBox>
            <S.Title>{entName}</S.Title>
            <S.Description>{entNo}</S.Description>
            <S.Hr></S.Hr>
            <S.Text right={true}>{deadline} 까지</S.Text>
          </S.TextBox>
          <S.Text>기업 소개</S.Text>
          <S.CompanyBox>
            <S.PreContents>{introduction}</S.PreContents>
          </S.CompanyBox>
          <S.Text>업무 내용</S.Text>
          <S.CompanyBox>
            <S.PreContents>{workContent}</S.PreContents>
          </S.CompanyBox>
          <>{children}</>
        </S.Container>
      </E.EmployContainer>
      <S.Container>
        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: `/edit/${id[2]}`,
            state: { entName: entName },
          }}
        >
          <S.Button>수정</S.Button>
        </Link>
      </S.Container>
    </PageTemplate>
  );
};

export default DetailEmploy;
