import React from "react";
import { RecruitNotice } from "../../components/RecruitNotice";
import { onRecruit, onFileRecruit } from "../../lib/api/recruit";
import { useHistory } from "react-router-dom";
import { SuccessToast, ErrorToast } from "../../lib/toast";

const RecruitNoticeContainer = () => {
  const history = useHistory();
  const onSubmitRecruitData = (data: object) => {
    onRecruit(data)
      .then(() => {
        SuccessToast("데이터가 성공적으로 업로드 되었습니다.");
        history.push("/employ");
      })
      .catch((err) => {
        console.log(err);
        ErrorToast("각 데이터 양식에 맞게 입력해주세요.");
      });
  };

  const onSubmitFileRecruit = (form: FormData, no: string) => {
  
    console.log("form" + form);
    onFileRecruit(form, no)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        ErrorToast("파일을 다시 확번 확인해주세요.");
      });
  };

  return (
    <>
      <RecruitNotice onRecruit={onSubmitRecruitData} onFileRecruit={onSubmitFileRecruit} />
    </>
  );
};

export default RecruitNoticeContainer;
