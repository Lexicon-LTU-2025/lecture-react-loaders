import { Await, useLoaderData } from 'react-router';
import type { ICocktail, ISearchLoader } from '../types';
import { Suspense, type ReactNode } from 'react';
import { Spinner } from './Spinner';

export const SearchResults = () => {
  const { cocktails } = useLoaderData<ISearchLoader>();

  const renderResults = (cocktails: ICocktail[]): ReactNode => {
    if (cocktails.length === 0) {
      return <p>No results...</p>;
    }

    return (
      <>
        {cocktails.map((c) => (
          <article key={c.id}>
            <h3>{c.name}</h3>
          </article>
        ))}
      </>
    );
  };

  return (
    <section id="search-results">
      <Suspense fallback={<Spinner />}>
        <Await children={(cocktails) => renderResults(cocktails)} resolve={cocktails} />
      </Suspense>
    </section>
  );
};
