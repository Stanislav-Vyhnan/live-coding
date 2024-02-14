import { Candidate } from '@/interfaces/Candidates';
import React from 'react';
import CandidateLi from './Candidate';

type Props = {
  candidates: Candidate[] | null;
  onAdd: (firstName: string) => void;
};

const CandidateList = ({ candidates, onAdd }: Props) => {
  if (!candidates) {
    return <span>Loading....</span>;
  }

  return (
    <ul className="mt-2">
      {candidates.map((candidate) => (
        <CandidateLi
          key={candidate.firstName}
          candidate={candidate}
          onAdd={onAdd}
        />
      ))}
    </ul>
  );
};

export default CandidateList;
