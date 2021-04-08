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
  allowance: number;
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
  file?: null;
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

export interface ManagerProps {
  managerRank: string;
  managerPhone: string;
  managerEmail: string;
  managerName: string;
}
export interface InitDataProps {
  entName: string;
  entNo: string;
  deadline: string;
  introduction: string;
  workContent: string;
  sector: string;
}
export interface QualificationProps {
  certificate: string[];
  grade: number;
  specialty: string;
}

export interface DateProps {
  year: string;
  month: string;
  day: string;
}
