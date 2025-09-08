import type { ReactElement } from 'react';
import { useLoaderData } from 'react-router';
import type { IRCBlockingLoader } from '../types';

export const RCBlockingView = (): ReactElement => {
  const { cocktail } = useLoaderData<IRCBlockingLoader>();

  return (
    <main>
      <h2>Random Cocktail Blocking View </h2>
      <article className="g-card">
        <figure>
          <img src={cocktail.thumbnail} alt={cocktail.name} />
        </figure>
        <div className="content">
          <h2>{cocktail.name}</h2>
        </div>
      </article>
    </main>
  );
};
