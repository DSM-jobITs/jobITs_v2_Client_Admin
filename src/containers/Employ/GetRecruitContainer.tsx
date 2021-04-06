import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { entInfoObjectProps, WorkingObjectProps, MealProps, WelfareProps, OtherObjectProps } from "../../interfaces";
import { DetailEmploy, Qualification, WorkingCondition, CompanyInformation, OtherInformation } from "../../components/DetailEmploy/index";
import { getDetailRecruit } from "../../lib/api/recruit";
import { ErrorToast } from "../../lib/toast";

const GetRecruit = () => {
  const location = useLocation();
  const id = location.pathname.split("/");
  const [entName, setEntName] = useState("");
  const [entNo, setEntNo] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [deadline, setDeadline] = useState("");
  const [workContent, setWorkContent] = useState("");
  const [certificate, setCertificate] = useState([]);
  const [grade, setGrade] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [workingConditions, setWorkingConditions] = useState<WorkingObjectProps>();
  const [meal, setMeal] = useState<MealProps>();
  const [welfare, setWelfare] = useState<WelfareProps>();
  const [entInfo, setEntInfo] = useState<entInfoObjectProps>();
  const [other, setOther] = useState<OtherObjectProps>();
  const [file, setFile] = useState([]);

  const getRecruit = () => {
    getDetailRecruit(id[2])
      .then((res) => {
        setEntName(res.data.entName);
        setEntNo(res.data.entNo);
        setIntroduction(res.data.introduction);
        setDeadline(res.data.deadline);
        setWorkContent(res.data.workContent);
        setCertificate(res.data.qualification.certificate);
        setGrade(res.data.qualification.grade);
        setSpecialty(res.data.qualification.specialty);
        setWorkingConditions(res.data.workingConditions);
        setMeal(res.data.workingConditions.meal);
        setWelfare(res.data.workingConditions.welfare);
        setEntInfo(res.data.entInfo);
        setOther(res.data.other);
        setFile(res.data.other.file);
      })
      .catch((err) => {
        ErrorToast("데이터를 불러오는 데에 실패했습니다.");
        console.log("error", err);
      });
  };

  useEffect(() => {
    getRecruit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <DetailEmploy entName={entName} entNo={entNo} introduction={introduction} deadline={deadline} workContent={workContent}>
        <Qualification certificate={certificate} grade={grade} specialty={specialty} />
        <WorkingCondition workingConditions={workingConditions} meal={meal} welfare={welfare} />
        <CompanyInformation entInfo={entInfo} />
        <OtherInformation other={other} file={file} />
      </DetailEmploy>
    </>
  );
};

export default GetRecruit;
