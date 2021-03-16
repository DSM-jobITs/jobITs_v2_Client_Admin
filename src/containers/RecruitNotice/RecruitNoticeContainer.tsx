import React from "react";
import { RecruitNotice } from "../../components/RecruitNotice";
import { onRecruit } from "../../lib/api/recruit";
import { useHistory } from "react-router-dom";

const RecruitNoticeContainer = (data: Object) => {
  const history = useHistory();
  const onSubmitRecruitData = ({}) => {
    onRecruit({ data })
      .then((res) => {
        console.log(res);
        history.push("/employ");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <RecruitNotice onRecruit={onSubmitRecruitData} />
    </>
  );
};

export default RecruitNoticeContainer;
