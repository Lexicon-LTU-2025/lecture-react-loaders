import type { LoaderFunctionArgs } from 'react-router';
import { fetchCocktailsByName, fetchRC } from './api';
import type { IRCBlockingLoader, IRCDeferredLoader, ISearchLoader } from './types';
import { mapRawCocktailData } from './utilities';

// A loader is a function that runs when a navigation has been initiatied to the Route owner of the loader. The loader runs and it is completed before the navigation is finalized. Whatever data it returns, will then be available inside the element of the Route owner. The data that is returned must be wrapped inside an object. "A data bag"

// A 'blocking' always returns the finished data, which means that it has been awaited.
export const RCBlockingLoader = async (): Promise<IRCBlockingLoader> => {
  const raw = await fetchRC();
  const cocktail = mapRawCocktailData(raw);
  return { cocktail };
};

export const RCDeferredLoader = async (): Promise<IRCDeferredLoader> => {
  const cocktail = fetchRC().then(mapRawCocktailData);
  // const cocktail = fetchRC().then((rc) => mapRawCocktailData(rc))
  return { cocktail };
};

export const SearchLoader = async ({ request }: LoaderFunctionArgs): Promise<ISearchLoader> => {
  const url = new URL(request.url);
  const name = url.searchParams.get('name') ?? '';

  if (!name) {
    return { cocktails: Promise.resolve([]) };
  }

  const cocktails = fetchCocktailsByName(name).then((rawCocktails) => {
    if (!rawCocktails) {
      return [];
    }

    return rawCocktails.map((rc) => mapRawCocktailData(rc));
  });

  console.log(cocktails);

  return { cocktails };
};
