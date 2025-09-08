import { fetchRC } from './api';
import type { IRCBlockingLoader, IRCDeferredLoader } from './types';
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
