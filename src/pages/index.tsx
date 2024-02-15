import { Inter } from 'next/font/google';
import CandidatesList from '@/components/CandidatesList';
import useCandidatesList from '@/hooks/useCandidatesList';
import useSearch from '@/hooks/useSearch';
import Search from '@/components/Search';
import Image from 'next/image';

import workHQLogo from '@/icons/work-hq-logo.svg';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { searchCandidates, onSearch, onClear } = useSearch();
  const { candidatesList, onAdd, onRemove } = useCandidatesList();

  const onAddCandidate = (candidateFirstName: string) => {
    onAdd(candidateFirstName, searchCandidates!);
    onClear();
  };

  const onSearchCandidates = (query: string) => {
    const currentListMapped = candidatesList.map(({ firstName }) => firstName);
    onSearch(query, currentListMapped);
  };

  return (
    <div className={`max-w-[882px] m-auto flex flex-col ${inter.className}`}>
      <header className="px-5 bg-white">
        <Image src={workHQLogo} alt="Work HQ Logo" className="my-4" />
      </header>

      <main>
        <Search isSearch={!!searchCandidates} onSearch={onSearchCandidates} />
        <CandidatesList
          candidates={searchCandidates || candidatesList}
          isSearch={!!searchCandidates}
          onAdd={onAddCandidate}
          onRemove={onRemove}
        />
      </main>
    </div>
  );
}
