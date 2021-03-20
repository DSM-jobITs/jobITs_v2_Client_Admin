import React from "react";
import { Link } from "react-router-dom";
import * as S from "./EmployRequest.style";
import { deleteIcon, addIcon } from "../../assets/img";
import { confirmAlert } from "../../lib/sweetAlert";
interface EmployRequestItemProps {
  id: string;
  recruitNo?: number;
  entName?: string;
  date?: string;
  onRemove: (id: string | undefined) => void;
}

const EmployRequestItem = ({ id, recruitNo, entName, date, onRemove }: EmployRequestItemProps) => {
  const removeItem = () => {
    confirmAlert(entName, "해당 글을 삭제하시겠습니까?", "warning", () => onRemove(id));
  };

  return (
    <S.Container>
      <S.EmployBox company={true}>
        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: `/employ/${id}`,
          }}
        >
          <S.Container company={true}>
            <S.CompanyText>{recruitNo}</S.CompanyText>
            <S.CompanyText>{entName}</S.CompanyText>
          </S.Container>
        </Link>
        <S.ImgContainer>
          <S.TitleText date={true}>{date}</S.TitleText>
          <S.Img src={deleteIcon} delete={true} onClick={removeItem}></S.Img>
          <Link
            style={{ textDecoration: "none" }}
            to={{
              pathname: `/edit/${id}`,
            }}
          >
            <S.Img src={addIcon}></S.Img>
          </Link>
        </S.ImgContainer>
      </S.EmployBox>
    </S.Container>
  );
};

export default EmployRequestItem;
