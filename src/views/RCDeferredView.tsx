import { Await, useLoaderData } from 'react-router';
import type { ICocktail, IRCDeferredLoader } from '../types';
import { Suspense } from 'react';
import { Spinner } from '../components';

export const RCDeferredView = () => {
  const { cocktail } = useLoaderData<IRCDeferredLoader>();

  const renderRC = (cocktail: ICocktail) => (
    <>
      <figure>
        <img src={cocktail.thumbnail} alt={cocktail.name} />
      </figure>
      <div className="content">
        <h2>{cocktail.name}</h2>
      </div>
    </>
  );

  return (
    <main>
      <h2>Random Cocktail Deferred View</h2>
      <article className="g-card">
        <Suspense fallback={<Spinner />}>
          <Await resolve={cocktail} errorElement={<div>An error occured...</div>}>
            {(c: ICocktail) => renderRC(c)}
          </Await>
        </Suspense>
      </article>
    </main>
  );
};
