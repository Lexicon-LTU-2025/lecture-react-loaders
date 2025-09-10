/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ICocktail {
  id: string;
  name: string;
  tags: string[];
  category: string;
  alcoholic: boolean;
  glass: string;
  instructions: string;
  thumbnail: string;
  ingredients: IIngredient[];
}

export interface IIngredient {
  ingredient: string;
  measure: string | null;
}

export interface IRawData {
  drinks: any[];
}

export interface IRCBlockingLoader {
  cocktail: ICocktail;
}

export interface IRCDeferredLoader {
  cocktail: Promise<ICocktail>;
}

export interface ISearchLoader {
  cocktails: Promise<ICocktail[]>;
}
