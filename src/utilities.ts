/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ICocktail } from './types';

export const mapRawCocktailData = (rawCocktail: any): ICocktail => ({
  id: rawCocktail.idDrink,
  name: rawCocktail.strDrink,
  tags: rawCocktail.strTags ? rawCocktail.strTags.split(',') : [],
  category: rawCocktail.strCategory,
  alcoholic: rawCocktail.strAlcoholic === 'Alcoholic',
  glass: rawCocktail.strGlass,
  instructions: rawCocktail.strInstructions,
  thumbnail: rawCocktail.strDrinkThumb + '/large',
  ingredients: Array.from({ length: 15 })
    .map((_, i) => ({
      ingredient: rawCocktail[`strIngredient${i + 1}`],
      measure: rawCocktail[`strMeasure${i + 1}`],
    }))
    .filter((item) => item.ingredient),
});

export const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));
