import React from "react";
import { RecruitNotice } from "../../components/RecruitNotice";
import { onRecruit } from "../../lib/api/recruit";
import { useHistory } from "react-router-dom";
import { SuccessToast, ErrorToast } from "../../lib/toast";

const RecruitNoticeContainer = () => {
  const history = useHistory();
  const onSubmitRecruitData = (data: object) => {
    console.log(data);
    onRecruit(data)
      .then((res) => {
        console.log(res);
        SuccessToast("데이터가 성공적으로 업로드 되었습니다.");
        history.push("/employ");
      })
      .catch((err) => {
        console.log(err);
        ErrorToast("각 데이터 양식에 맞게 입력해주세요.");
      });
  };

  return (
    <>
      <RecruitNotice onRecruit={onSubmitRecruitData} />
    </>
  );
};

export default RecruitNoticeContainer;
