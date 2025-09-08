import { fetchRC } from './api';
import type { IRCBlockingLoader, IRCDeferredLoader } from './types';
import { mapRawCocktailData } from './utilities';

export const RCBlockingLoader = async (): Promise<IRCBlockingLoader> => {
  const raw = await fetchRC();
  const cocktail = mapRawCocktailData(raw);
  return { cocktail };
};

export const RCDeferredLoader = async (): Promise<IRCDeferredLoader> => {
  const cocktail = fetchRC().then(mapRawCocktailData);
  return { cocktail };
};
