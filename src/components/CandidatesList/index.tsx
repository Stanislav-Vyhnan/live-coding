import { Candidate } from '@/interfaces/Candidates';
import React from 'react';
import CandidateLi from './CandidateLi';

type Props = {
  candidates: Candidate[] | null;
  isSearch: boolean;
  onAdd: (firstName: string) => void;
  onRemove: (firstName: string) => void;
};

const CandidatesList = ({ candidates, onAdd, onRemove, isSearch }: Props) => {
  if (!candidates) {
    return <span>Loading....</span>;
  }

  return (
    <ul className="px-5">
      {candidates.map((candidate) => (
        <CandidateLi
          key={candidate.firstName}
          candidate={candidate}
          enableAdding={isSearch}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};

export default CandidatesList;
