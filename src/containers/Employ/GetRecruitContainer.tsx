import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { entInfoObjectProps, workingObjectProps, mealProps, welfareProps, otherObjectProps } from "../../interfaces";
import { DetailEmploy, Qualification, WorkingCondition, CompanyInformation, OtherInformation } from "../../components/DetailEmploy/index";
import { getDetailRecruit } from "../../lib/api/recruit";

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
  const [specialty, setSpecialty] = useState([]);
  const [workingConditions, setWorkingConditions] = useState<workingObjectProps>();
  const [meal, setMeal] = useState<mealProps>();
  const [welfare, setWelfare] = useState<welfareProps>();
  const [entInfo, setEntInfo] = useState<entInfoObjectProps>();
  const [other, setOther] = useState<otherObjectProps>();
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
        setSpecialty(res.data.qualification.speciality);
        setWorkingConditions(res.data.workingConditions);
        setMeal(res.data.workingConditions.meal);
        setWelfare(res.data.workingConditions.welfare);
        setEntInfo(res.data.entInfo);
        setOther(res.data.other);
        setFile(res.data.other.file);
      })
      .catch((err) => {
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
