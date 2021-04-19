import React, { useEffect, useState } from "react";
import { updateRecruit, getDetailAdminRecruit, onFileRecruit } from "../../lib/api/recruit";
import { useHistory, useLocation } from "react-router-dom";
import { SuccessToast, ErrorToast } from "../../lib/toast";
import UpdateRecruit from "../../components/UpdateRecruit/UpdateRecruit";
import {
  InitDataProps,
  WorkingObjectProps,
  QualificationProps,
  MealProps,
  WelfareProps,
  entInfoObjectProps,
  OtherObjectProps,
  ManagerProps,
  DateProps,
} from "../../interfaces";

const UpdateRecruitContainer = () => {
  const location = useLocation();
  const history = useHistory();
  const id = location.pathname.split("/");
  const [status, setStatus] = useState(false);
  const [error, setError] = useState("");
  const [change, setChange] = useState(false);
  const [initData, setInitData] = useState<InitDataProps>({
    entName: "",
    entNo: "",
    deadline: "",
    introduction: "",
    workContent: "",
    sector: "",
  });
  const [deadline, setDeadline] = useState<DateProps>({
    year: "",
    month: "",
    day: "",
  });
  const [establishment, setEstablishment] = useState<DateProps>({
    year: "",
    month: "",
    day: "",
  });
  const [workingConditions, setWorkingConditions] = useState<WorkingObjectProps>({
    allowance: "0",
    salary: "0",
    period: 3,
  });
  const [qualification, setQualification] = useState<QualificationProps>({ certificate: [], grade: 0, specialty: "" });
  const [meal, setMeal] = useState<MealProps>({ breakfast: false, lunch: false, dinner: false, includeSalary: false });
  const [welfare, setWelfare] = useState<WelfareProps>({ fourMajor: false, selfDevelop: false, laptop: false, etc: "" });
  const [entInfo, setEntInfo] = useState<entInfoObjectProps>({
    numOfWorker: 0,
    entPhone: "",
    entSales: "0",
    address: "",
    establishmentDate: "",
    startTime: "",
    endTime: "",
  });
  const [manager, setManager] = useState<ManagerProps>({
    managerRank: "",
    managerPhone: "",
    managerEmail: "",
    managerName: "",
  });
  const [other, setOther] = useState<OtherObjectProps>({
    personnel: 0,
    recruitPlan: false,
    reception: "",
    file: null,
    notRecruitPlan: true,
  });
  useEffect(() => {
    getDetailAdminRecruit(id[2])
      .then((res) => {
        setInitData(res.data.introduce);
        setWorkingConditions(res.data.workingConditions);
        setDeadline(res.data.introduce.deadline);
        setEstablishment(res.data.entInfo.establishmentDate);
        setQualification(res.data.qualification);
        setMeal(res.data.workingConditions.meal);
        setWelfare(res.data.workingConditions.welfare);
        setEntInfo(res.data.entInfo);
        setOther(res.data.other);
        setManager(res.data.manager);
      })
      .catch(() => {
        ErrorToast("데이터를 불러오는데에 실패했습니다.");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const data = {
    personnel: other.personnel,
    name: initData.entName,
    entNo: initData.entNo.replace(/(\d{3})(\d{2})(\d{5})/, "$1-$2-$3"),
    phone:
      entInfo.entPhone.length === 10
        ? entInfo.entPhone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
        : entInfo.entPhone.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"),
    sales: !entInfo.entSales ? "0" : entInfo.entSales,
    sector: initData.sector,
    establishmentDate: `${establishment.year}-${establishment.month}-${establishment.day}`,
    workers: entInfo.numOfWorker,
    address: entInfo.address,
    managerRank: manager.managerRank,
    managerPhone: manager.managerPhone.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, "$1-$2-$3"),
    managerEmail: manager.managerEmail,
    managerName: manager.managerName,
    introduce: initData.introduction,
    detail: initData.workContent,
    certificates: change ? [qualification.certificate] : qualification.certificate,
    grade: !qualification.grade ? "0" : qualification.grade,
    specialty: qualification.specialty,
    startTime: entInfo.startTime,
    endTime: entInfo.endTime,
    salary: !workingConditions.salary ? "0" : workingConditions.salary,
    period: workingConditions.period,
    breakfast: meal.breakfast,
    lunch: meal.lunch,
    dinner: meal.dinner,
    mealSalary: meal.includeSalary,
    fourMajor: welfare.fourMajor,
    selfDevelop: welfare.selfDevelop,
    labtop: welfare.laptop,
    etc: welfare.etc,
    recruitPlan: other.recruitPlan,
    reception: other.reception,
    deadline: `${deadline.year}-${deadline.month}-${deadline.day}`,
    allowance: !workingConditions.allowance ? "0" : workingConditions.allowance,
  };

  const onSubmitFileRecruit = (form: FormData, no: string) => {
    console.log("form" + form);
    onFileRecruit(form, no.replace(/(\d{3})(\d{2})(\d{5})/, "$1-$2-$3")).catch((err) => {
      console.log(err);
      ErrorToast("파일을 다시 확번 확인해주세요.");
    });
  };
  const onUpdateRecruitData = () => {
    updateRecruit(id[2], data)
      .then(() => {
        history.push("/employ");
        SuccessToast("수정 완료하였습니다.");
      })
      .catch((err) => {
        ErrorToast("수정에 실패했습니다. 다시 시도하세요.");
        setError(err.response.data.message);
        setStatus(true);
      });
  };
  const onMealCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const key = e.target.name;
    setMeal((prev) => ({ ...prev, [key]: checked }));
  };

  const onWelfareCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const key = e.target.name;
    setWelfare((prev) => ({ ...prev, [key]: checked }));
  };

  const onChangeInitData = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const key = e.target.name;
    key === "etc" ? setWelfare((prev) => ({ ...prev, [key]: value })) : setInitData((prev) => ({ ...prev, [key]: value }));
  };

  const onChangeDeadlineData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const key = e.target.name;
    setDeadline((prev) => ({ ...prev, [key]: value }));
  };

  const onChangeEstablishment = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const key = e.target.name;
    setEstablishment((prev) => ({ ...prev, [key]: value }));
  };

  const onChangeEntInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const key = e.target.name;
    setEntInfo((prev) => ({ ...prev, [key]: value }));
  };

  const onChangeQualification = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const key = e.target.name;

    if (key === "certificate") {
      if (!value) {
        console.log(qualification.certificate);
        setQualification((prev) => ({ ...prev, [key]: [] }));
        setChange(false);
      }
      setChange(true);
    }
    setQualification((prev) => ({ ...prev, [key]: value }));
  };

  const onChangeOther = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const key = e.target.name;
    setOther((prev) => ({ ...prev, [key]: value }));
  };

  const onReception = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const key = e.target.name;
    if (key === "notRecruitPlan") {
      setOther((prev) => ({ ...prev, ["recruitPlan"]: false }));
    }
    setOther((prev) => ({ ...prev, [key]: checked }));
  };

  const onChangeManager = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const key = e.target.name;
    setManager((prev) => ({ ...prev, [key]: value }));
  };
  const onChangeWorkingConditions = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const key = e.target.name;
    console.log(value);
    setWorkingConditions((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <UpdateRecruit
        onUpdateRecruit={onUpdateRecruitData}
        initData={initData}
        workingData={workingConditions}
        qualification={qualification}
        manager={manager}
        meal={meal}
        welfare={welfare}
        entInfo={entInfo}
        other={other}
        onFileRecruit={onSubmitFileRecruit}
        establishment={establishment}
        deadline={deadline}
        onReception={onReception}
        onChangeDeadlineData={onChangeDeadlineData}
        onChangeEstablishment={onChangeEstablishment}
        onMealCheckBox={onMealCheckBox}
        onWelfareCheckBox={onWelfareCheckBox}
        onChangeInitData={onChangeInitData}
        onChangeEntInfo={onChangeEntInfo}
        onChangeQualification={onChangeQualification}
        onChangeOther={onChangeOther}
        onChangeManager={onChangeManager}
        onChangeWorkingConditions={onChangeWorkingConditions}
        status={status}
        error={error}
      />
    </>
  );
};

export default UpdateRecruitContainer;
