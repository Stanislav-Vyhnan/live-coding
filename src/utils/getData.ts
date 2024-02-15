import { Candidate } from '@/interfaces/Candidates';

export const getData = async (searchQuery: string): Promise<Candidate[]> => {
  const filterData = (candidates: Candidate[]) => {
    return candidates.filter((candidate) => {
      const candidateName = `${candidate.firstName} ${candidate.lastName}`;
      return candidateName.includes(searchQuery);
    });
  };

  const data: Candidate[] = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(candidates);
    }, 250);
  });

  return filterData(data);
};

const candidates: Candidate[] = [
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    location: 'New York, NY',
    workHistory: [
      {
        company: 'TechCorp',
        title: 'Software Engineer',
        startDate: '2018-03-01',
        endDate: '2020-08-31',
      },
      {
        company: 'Innovatech',
        title: 'Senior Developer',
        startDate: '2020-09-01',
        endDate: '2023-01-15',
      },
    ],
  },
  {
    firstName: 'Bob',
    lastName: 'Smith',
    location: 'San Francisco, CA',
    workHistory: [
      {
        company: 'WebWorld',
        title: 'Web Developer',
        startDate: '2016-06-01',
        endDate: '2019-05-31',
      },
      {
        company: 'DevSolutions',
        title: 'Team Lead',
        startDate: '2019-06-01',
        endDate: '2024-01-01',
      },
    ],
  },
  {
    firstName: 'Carol',
    lastName: 'Davis',
    location: 'Austin, TX',
    workHistory: [
      {
        company: 'DataDynamics',
        title: 'Data Analyst',
        startDate: '2017-02-01',
        endDate: '2019-12-31',
      },
      {
        company: 'InfoTech',
        title: 'Data Scientist',
        startDate: '2020-01-01',
        endDate: '2023-12-31',
      },
    ],
  },
  {
    firstName: 'David',
    lastName: 'Wilson',
    location: 'Seattle, WA',
    workHistory: [
      {
        company: 'CloudNet',
        title: 'Network Engineer',
        startDate: '2015-05-01',
        endDate: '2018-04-30',
      },
      {
        company: 'SkyTech',
        title: 'Senior Network Engineer',
        startDate: '2018-05-01',
        endDate: '2023-01-01',
      },
    ],
  },
  {
    firstName: 'Eva',
    lastName: 'Brown',
    location: 'Chicago, IL',
    workHistory: [
      {
        company: 'FinancePro',
        title: 'Financial Analyst',
        startDate: '2014-07-01',
        endDate: '2017-06-30',
      },
      {
        company: 'MoneyMatters',
        title: 'Senior Financial Analyst',
        startDate: '2017-07-01',
        endDate: '2024-01-01',
      },
    ],
  },
  {
    firstName: 'Frank',
    lastName: 'Miller',
    location: 'Boston, MA',
    workHistory: [
      {
        company: 'EduTech',
        title: 'Educational Technologist',
        startDate: '2018-09-01',
        endDate: '2021-08-31',
      },
      {
        company: 'LearnFast',
        title: 'Senior EdTech Consultant',
        startDate: '2021-09-01',
        endDate: '2024-01-01',
      },
    ],
  },
  {
    firstName: 'Grace',
    lastName: 'Harris',
    location: 'Denver, CO',
    workHistory: [
      {
        company: 'HealthCare Inc.',
        title: 'Healthcare Administrator',
        startDate: '2019-04-01',
        endDate: '2022-03-31',
      },
      {
        company: 'Wellness Solutions',
        title: 'Senior Administrator',
        startDate: '2022-04-01',
        endDate: '2024-01-01',
      },
    ],
  },
];
