import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import { getData } from '@/utils/getData';
import Input from '@/components/Input';
import CandidateList from '@/components/CandidatesList';
import { Candidate } from '@/interfaces/Candidates';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [data, setData] = useState<Candidate[] | null>(null);
  const [candidateList, setCandidatesList] = useState<Candidate[]>([]);

  const onAdd = (candidateFirstName: string) => {
    const candidate = data!.find(
      ({ firstName }) => candidateFirstName === firstName
    );

    if (!candidate) {
      return;
    }

    const newCandidateList = [...candidateList, candidate];
    setCandidatesList(newCandidateList);
  };

  const onFinish = (value: string) => {
    getData(value).then((res) => {
      const mappedList = candidateList.map(({ firstName }) => firstName);
      const filteredData = res.filter(({ firstName }) =>
        mappedList.includes(firstName)
      );

      setData(filteredData);
    });
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <Input onFinish={onFinish} />
      <CandidateList candidates={data} onAdd={onAdd} />
    </main>
  );
}
