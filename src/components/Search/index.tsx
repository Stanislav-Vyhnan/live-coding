import React, { useEffect, useState } from 'react';
import Input from '../Input';
import useDebounce from '@/hooks/useDebounce';

import searchIcon from '@/icons/search-icon.svg';
import Image from 'next/image';

type Props = {
  isSearch: boolean;
  onSearch: (query: string) => void;
};

const initialValue = '';

const Search = ({ isSearch, onSearch }: Props) => {
  const [value, setValue] = useState<string>(initialValue);
  const debouncedValue = useDebounce<string>(value);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue]);

  useEffect(() => {
    if (!isSearch) {
      setValue(initialValue);
    }
  }, [isSearch]);

  return (
    <div className="px-5 py-[18px] border border-grey-300 bg-white">
      <p className="font-semibold text-xs">Search</p>
      <div className="mt-1 relative border border-grey-300 rounded">
        <Image
          src={searchIcon}
          alt="Magic icon"
          className="absolute my-auto inset-y-1.5 left-1.5"
        />
        <Input
          value={value}
          onChange={setValue}
          className="p-2.5 w-full pl-10"
          placeholder="Michael Jordan..."
        />
      </div>
    </div>
  );
};

export default Search;
