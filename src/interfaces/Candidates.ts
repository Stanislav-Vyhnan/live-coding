export interface WorkHistory {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
}

export interface Candidate {
  firstName: string;
  lastName: string;
  location: string;
  workHistory: WorkHistory[];
}
