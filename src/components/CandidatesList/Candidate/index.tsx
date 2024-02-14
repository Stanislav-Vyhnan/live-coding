import { Candidate } from '@/interfaces/Candidates';
import React from 'react';

type Props = {
  candidate: Candidate;
};

const Candidate = ({ candidate }: Props) => {
  return <li>{`${candidate.firstName} ${candidate.lastName}`}</li>;
};

export default Candidate;
