import { Candidate } from '@/interfaces/Candidates';
import { getData } from '@/utils/getData';
import { useState } from 'react';

interface UseSearchHook {
  searchCandidates: null | Candidate[];
  onSearch: (query: string, candidatesList: string[]) => Promise<void>;
  onClear: () => void;
}

const useSearch = (): UseSearchHook => {
  const [searchCandidates, setSearchCandidates] = useState<null | Candidate[]>(
    null
  );

  const onSearch = async (query: string, candidatesList: string[]) => {
    if (query === '') {
      setSearchCandidates(null);
    } else {
      const data = await getData(query);
      const filteredData = data.filter(
        ({ firstName }) => !candidatesList.includes(firstName)
      );
      setSearchCandidates(filteredData);
    }
  };

  const onClear = () => {
    setSearchCandidates(null);
  };

  return {
    searchCandidates,
    onSearch,
    onClear,
  };
};

export default useSearch;
