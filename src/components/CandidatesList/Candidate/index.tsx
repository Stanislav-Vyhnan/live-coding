import Button from '@/components/Button';
import { Candidate } from '@/interfaces/Candidates';
import React from 'react';

type Props = {
  candidate: Candidate;
  onAdd: () => void;
};

const Candidate = ({ candidate, onAdd }: Props) => {
  const onRemoveCandidate = () => {};

  const onAddCandidate = () => {
    onAdd(candidate.firstName);
  };
  return (
    <li>
      <p>Name: {`${candidate.firstName} ${candidate.lastName}`}</p>
      <p>Location: {candidate.location}</p>
      <Button onClick={onRemoveCandidate} text="Remove" />
      <Button onClick={onAddCandidate} text="Add" />
    </li>
  );
};

export default Candidate;
