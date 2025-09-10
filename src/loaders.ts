import type { LoaderFunctionArgs } from 'react-router';
import { fetchCategories, fetchCocktailsByCategory, fetchCocktailsByName, fetchRC } from './api';
import type { IAppLoader, IRCBlockingLoader, IRCDeferredLoader, ISearchLoader } from './types';
import { mapRawCocktailData } from './utilities';

// A loader is a function that runs when a navigation has been initiatied to the Route owner of the loader. The loader runs and it is completed before the navigation is finalized. Whatever data it returns, will then be available inside the element of the Route owner. The data that is returned must be wrapped inside an object. "A data bag"

export const AppLoader = async (): Promise<IAppLoader> => {
  const categories = fetchCategories().then((rawCategories) =>
    rawCategories.map((rc) => rc.strCategory)
  );

  return { categories };
};

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
  const category = url.searchParams.get('category') ?? '';
  const name = url.searchParams.get('name') ?? '';

  // If no category or name, return empty array.
  if (!category && !name) {
    return { cocktails: Promise.resolve([]) };
  }

  // If no name, just a category. Search for cocktails by category.
  if (!name) {
    const cocktails = fetchCocktailsByCategory(category).then((rawCocktails) =>
      rawCocktails.map((c) => mapRawCocktailData(c))
    );

    return { cocktails };
  }

  const filteredCocktails = fetchCocktailsByName(name).then((rawCocktails) => {
    // If no search result, e.g null, return empty array.
    if (!rawCocktails) {
      return [];
    }

    // Standard search, always by name first.
    const cocktails = rawCocktails.map((rc) => mapRawCocktailData(rc));

    // If we have a category present, filter internally with the filter method.
    if (category) {
      return cocktails.filter((c) => c.category === category);
    }

    return cocktails;
  });

  return { cocktails: filteredCocktails };
};
