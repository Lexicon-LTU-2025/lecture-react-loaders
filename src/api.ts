import type { IRawCocktailData } from './types';
import { sleep } from './utilities';

export async function fetchRC() {
  await sleep(2000);
  const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  const data = (await res.json()) as IRawCocktailData; // { drinks: [raw] }
  return data.drinks[0];
}
