import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import { getData } from '@/utils/getData';
import Input from '@/components/Input';
import CandidateList from '@/components/CandidatesList';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [candidates, setCandidates] = useState(null);

  const onFinish = (value: string) => {
    getData(value).then((res) => {
      setCandidates(res);
    });
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <Input onFinish={onFinish} />
      <CandidateList candidates={candidates} />
    </main>
  );
}
