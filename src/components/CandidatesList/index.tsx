import { Candidate } from '@/interfaces/Candidates';
import React from 'react';
import CandidateLi from './Candidate';

type Props = {
  candidates: Candidate[] | null;
};

const CandidateList = ({ candidates }: Props) => {
  if (!candidates) {
    return <span>Loading....</span>;
  }

  return (
    <ul className="mt-2">
      {candidates.map((candidate, index) => (
        <CandidateLi key={index} candidate={candidate} />
      ))}
    </ul>
  );
};

export default CandidateList;
