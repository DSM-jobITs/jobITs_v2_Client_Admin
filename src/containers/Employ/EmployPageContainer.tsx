import React, { useState, useEffect, useCallback } from "react";
import { getRecruit, removeRecruit } from "../../lib/api/recruit";
import EmployRequest from "../../components/EmployRequest/EmployRequest";
import { WarningToast, ErrorToast } from "../../lib/toast";

const EmployPageContainer = () => {
  const [page, setPage] = useState(0);
  const [recruitList, setRecruitList] = useState([]);
  const [text, setText] = useState(false);
  const prevPage = useCallback(() => {
    page < 0 ? WarningToast("가장 최근 페이지입니다.") : setPage(page - 1);
  }, [page]);

  const nextPage = useCallback(async () => {
    setPage(page + 1);
  }, [page]);

  const removeItem = useCallback((id: string | undefined) => {
    removeRecruit(id)
      .then(() => {
        setTimeout(() => {
          window.location.reload();
        }, 300);
      })
      .catch(() => {
        ErrorToast("삭제에 실패하였습니다. 다시 시도하세요.");
      });
  }, []);

  useEffect(() => {
    page < 0
      ? WarningToast("가장 최근 페이지입니다.")
      : getRecruit(page === 0 ? 0 : page)
          .then((res) => {
            setRecruitList(res.data.response);
            res.data.response.length < 1 ? setText(true) : setText(false);
          })
          .catch(() => {
            ErrorToast("데이터를 불러오는 데에 실패했습니다.");
          });
  }, [page]);

  const onPageNumber = (page: number) => {
    setPage(page - 1);
  };

  return (
    <>
      <EmployRequest
        recruitList={recruitList}
        page={page}
        prevPage={prevPage}
        nextPage={nextPage}
        onPageNum={onPageNumber}
        text={text}
        onRemove={removeItem}
      />
    </>
  );
};

export default EmployPageContainer;
