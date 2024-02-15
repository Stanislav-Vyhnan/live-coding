import { Candidate } from '@/interfaces/Candidates';
import { useState } from 'react';

interface UseCandidatesListHook {
  candidatesList: Candidate[];
  onAdd: (candidateFirstName: string, searchCandidates: Candidate[]) => void;
  onRemove: (candidateFirstName: string) => void;
}

const useCandidatesList = (): UseCandidatesListHook => {
  const [candidatesList, setCandidatesList] = useState<Candidate[]>([]);

  const onAdd = (candidateFirstName: string, searchCandidates: Candidate[]) => {
    const candidate = searchCandidates.find(
      ({ firstName }) => firstName === candidateFirstName
    );

    if (candidate) {
      setCandidatesList([...candidatesList, candidate]);
    }
  };

  const onRemove = (candidateFirstName: string) => {
    const filteredList = candidatesList.filter(
      ({ firstName }) => firstName !== candidateFirstName
    );

    setCandidatesList(filteredList);
  };

  return { candidatesList, onAdd, onRemove };
};

export default useCandidatesList;
