import Image from 'next/image';

import Button from '@/components/Button';
import { Candidate } from '@/interfaces/Candidates';
import CandidateHeader from './CandidateHeader';
import CandidateWorkHistory from './CandidateWorkHistory';

import closeIcon from '@/icons/close-icon.svg';
import { dateService } from '@/service/date.service';

type Props = {
  candidate: Candidate;
  enableAdding: boolean;
  onAdd: (firstName: string) => void;
  onRemove: (firstName: string) => void;
};

const liClassName = 'my-5 pb-4 bg-white border border-grey-300 rounded-lg';

const CandidateLi = ({ candidate, enableAdding, onAdd, onRemove }: Props) => {
  const onRemoveCandidate = (): void => {
    onRemove(candidate.firstName);
  };

  const onAddCandidate = (): void => {
    onAdd(candidate.firstName);
  };

  const yearsExperience = dateService.getTotalExperience(candidate.workHistory);
  const sortedWorkHistory = dateService.getSortedHistory(candidate.workHistory);

  let content = (
    <>
      <CandidateHeader
        yearsExperience={yearsExperience}
        fullName={`${candidate.firstName} ${candidate.lastName}`}
        location={candidate.location}
      />
      <CandidateWorkHistory workHistory={sortedWorkHistory} />
    </>
  );

  if (enableAdding) {
    return (
      <li className={liClassName}>
        <Button onClick={onAddCandidate} className="w-full">
          {content}
        </Button>
      </li>
    );
  }

  return (
    <li className={liClassName}>
      <div className="flex justify-end p-4 border-b border-grey-300">
        <Button onClick={onRemoveCandidate}>
          <Image src={closeIcon} alt="Close icon" />
        </Button>
      </div>
      {content}
    </li>
  );
};

export default CandidateLi;
