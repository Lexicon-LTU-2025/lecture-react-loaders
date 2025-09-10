/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IRawCategory, IRawData } from './types';
import { sleep } from './utilities';

export async function fetchCategories(): Promise<IRawCategory[]> {
  const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const data = (await res.json()) as IRawData;
  return data.drinks as IRawCategory[];
}

export async function fetchCocktailsByCategory(category: string): Promise<any[]> {
  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
  const data = (await res.json()) as IRawData;
  return data.drinks;
}

export async function fetchRC() {
  await sleep(3000);
  const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');

  if (res.ok === false) {
    throw new Error();
  }

  const data = (await res.json()) as IRawData; // { drinks: [raw] }
  return data.drinks[0];
}

export async function fetchCocktailsByName(name: string) {
  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
  const data = (await res.json()) as IRawData;
  return data.drinks;
}
