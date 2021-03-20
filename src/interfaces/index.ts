export interface entInfoObjectProps {
  numOfWorker: number;
  entPhone: string;
  entSales: number;
  address: string;
  establishmentDate: string;
  startTime: string;
  endTime: string;
}

export interface workingObjectProps {
  salary: number;
  period: number;
}

export interface mealProps {
  breakfast: boolean;
  lunch: boolean;
  dinner: boolean;
  includeSalary: boolean;
}

export interface welfareProps {
  fourMajor: boolean;
  selfDevelop: boolean;
  laptop: boolean;
  etc: string;
}

export interface otherObjectProps {
  personnel: number;
  recruitPlan: boolean;
  reception: string;
}

export interface EmployRequestListProps {
  recruitId: string;
  recruitNo: number;
  enterprise: enterpriseProps;
  reception: string;
}

export interface enterpriseProps {
  name: string;
}
