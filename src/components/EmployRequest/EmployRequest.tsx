import React from "react";
import { Link } from "react-router-dom";
import * as S from "./EmployRequest.style";
import PageTemplate from "../Common/PageTemplate/PageTemplate";
import { EmployRequestTitleBox, EmployRequestItem } from "./index";
import { arrowBack, arrowForward } from "../../assets/img/index";
import { EmployRequestListProps } from "../../interfaces/index";
interface EmployRequestProps {
  recruitList: EmployRequestListProps[];
  prevPage: () => void;
  nextPage: () => void;
  onPageNum: (page: number) => void;
  text: boolean;
  page: number;
  onRemove: (id: string | undefined) => void;
}

const EmployRequest = ({ recruitList, nextPage, prevPage, onPageNum, text, page, onRemove }: EmployRequestProps) => {
  const onNextPage = () => nextPage();
  const onPrevPage = () => prevPage();
  let pageNum = page < 3 ? [1, 2, 3, 4, 5] : [page - 2, page - 1, page, page + 1, page + 2];
  const onPageNumber = (p: number) => onPageNum(p);

  return (
    <PageTemplate>
      <S.EmployContainer>
        <S.Container>
          <EmployRequestTitleBox title={"채용 의뢰"} />
          {text ? (
            <p style={{ textAlign: "center" }}>더 이상 게시물이 없습니다.</p>
          ) : (
            recruitList.map((r: EmployRequestListProps, index: number) => (
              <EmployRequestItem
                onRemove={onRemove}
                key={index}
                id={r.recruitId}
                recruitNo={r.recruitNo}
                entName={r.enterprise.name}
                date={r.reception}
              />
            ))
          )}
        </S.Container>
      </S.EmployContainer>
      <S.Container flex={true}>
        <S.PageNationBox>
          <S.PageNationItem onClick={onPrevPage}>
            <S.Img src={arrowBack}></S.Img>
          </S.PageNationItem>
          {pageNum.map((p: number, index: number) => (
            <S.PageNationItem
              onClick={() => onPageNumber(p)}
              key={index}
              style={{ backgroundColor: p === page + 1 ? "#349a07" : "", color: p === page + 1 ? "white" : "" }}
            >
              {p}
            </S.PageNationItem>
          ))}
          <S.PageNationItem last={true} onClick={onNextPage}>
            <S.Img src={arrowForward}></S.Img>
          </S.PageNationItem>
        </S.PageNationBox>
        <S.Container>

          <Link
            style={{ textDecoration: "none" }}
            to={{
              pathname: `/recruit`,
            }}
          >
            <S.AddButton>기업 추가</S.AddButton>
          </Link>
        </S.Container>
      </S.Container>
    </PageTemplate>
  );
};

export default EmployRequest;
