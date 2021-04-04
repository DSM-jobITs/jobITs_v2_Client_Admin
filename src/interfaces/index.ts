export interface entInfoObjectProps {
  numOfWorker: number;
  entPhone: string;
  entSales: number;
  address: string;
  establishmentDate: string;
  startTime: string;
  endTime: string;
}

export interface WorkingObjectProps {
  allowance : number;
  salary: number;
  period: number;
}

export interface MealProps {
  breakfast: boolean;
  lunch: boolean;
  dinner: boolean;
  includeSalary: boolean;
}

export interface WelfareProps {
  fourMajor: boolean;
  selfDevelop: boolean;
  laptop: boolean;
  etc: string;
}

export interface OtherObjectProps {
  personnel: number;
  recruitPlan: boolean;
  reception: string;
}

export interface EmployRequestListProps {
  recruitId: string;
  recruitNo: number;
  enterprise: EnterpriseProps;
  reception: string;
}

export interface EnterpriseProps {
  name: string;
}

export interface InitRecruitData {
  entName: string;
  entNo: string;
  deadline: string;
  introduction: string;
  workContent: string;
  qualification: {
    certificate: string[];
    grade: number;
    specialty: string;
  };
  workingConditions: {
    salary: number;
    period: number;
    meal: {
      breakfast: boolean;
      lunch: boolean;
      dinner: boolean;
      includeSalary: boolean;
    };
    welfare: {
      fourMajor: boolean;
      selfDevelop: boolean;
      laptop: boolean;
      etc: string;
    };
  };
  entInfo: {
    numOfWorker: number;
    entPhone: string;
    entSales: number;
    address: string;
    establishmentDate: string;
    startTime: string;
    endTime: string;
  };
  other: {
    personnel: number;
    recruitPlan: boolean;
    reception: string;
    file: null;
  };
}
