'use client';

import React from 'react';
import { useSafeSearchParams } from '@/validations/routeSchema';
import { SearchIcon, SpinnerIcon } from './ui/icons';

export default function Search() {
  const searching = false;
  // const searchParams = useSearchParams();
  // const q = searchParams.get('q') || '';
  const { q } = useSafeSearchParams('home');

  return (
    <form role="search">
      <input
        className="w-full pl-8 outline-offset-1"
        aria-label="Search contacts"
        name="q"
        defaultValue={q}
        placeholder="Search"
        type="search"
      />
      <div aria-hidden="true" className="absolute left-10 top-7">
        {searching ? (
          <div className="h-fit w-fit animate-spin">
            <SpinnerIcon width={16} height={16} className="text-gray-dark" />
          </div>
        ) : (
          <SearchIcon width={16} height={16} className="text-gray-dark" />
        )}
      </div>
    </form>
  );
}
