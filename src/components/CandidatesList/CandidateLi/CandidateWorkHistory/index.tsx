import { WorkHistory } from '@/interfaces/Candidates';

import carrotIcon from '@/icons/carrot-icon.svg';
import companyIcon from '@/icons/company-logo-icon.svg';
import Image from 'next/image';
import { dateService } from '@/service/date.service';

type Props = {
  workHistory: WorkHistory[];
};

const CandidateWorkHistory = ({ workHistory }: Props) => {
  return (
    <div className="mt-3 px-4">
      <div className="w-full flex items-center">
        <span className="text-nowrap	font-semibold text-[12px] text-grey-600">
          Work History · {workHistory.length}
        </span>
        <hr className="h-[1px] border-grey-300 ml-2 w-full" />
      </div>
      <ul className="mt-2.5 text-left font-medium text-grey-900">
        {workHistory.map((workHistory, index) => {
          const { years, months } = dateService.getWorkTime(workHistory);

          return (
            <li key={index} className="flex items-center my-1.5">
              <Image
                src={index ? carrotIcon : companyIcon}
                alt="Company logo"
                className="mr-2"
              />
              {workHistory.company}
              &nbsp;
              <span className="font-bold text-grey-600">·</span>
              &nbsp;
              {workHistory.title}
              <span className="font-semibold text-grey-500 text-[12px] ml-1">
                {years} yrs {months} mos
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CandidateWorkHistory;
