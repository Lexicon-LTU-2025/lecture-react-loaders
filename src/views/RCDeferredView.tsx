import { Suspense, type ReactElement } from 'react';
import { Await, useLoaderData } from 'react-router';
import type { ICocktail, IRCDeferredLoader } from '../types';
import { Spinner } from '../components';

export const RCDeferredView = (): ReactElement => {
  const { cocktail } = useLoaderData<IRCDeferredLoader>();

  const renderRC = (cocktail: ICocktail) => {
    return (
      <>
        <figure>
          <img src={cocktail.thumbnail} alt={cocktail.name} />
        </figure>
        <div className="content">
          <h2>{cocktail.name}</h2>
        </div>
      </>
    );
  };

  return (
    <main>
      <h2>Random Cocktail Deferred View</h2>
      <article className="g-card">
        <Suspense fallback={<Spinner />}>
          <Await resolve={cocktail}>{(c: ICocktail) => renderRC(c)}</Await>
        </Suspense>
      </article>
    </main>
  );
};
