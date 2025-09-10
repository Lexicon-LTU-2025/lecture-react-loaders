import { Suspense, useRef, type ReactNode } from 'react';
import { Await, useRouteLoaderData, useSearchParams } from 'react-router';
import { useDebounceCallback } from 'usehooks-ts';
import type { IAppLoader } from '../types';

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { categories } = useRouteLoaderData('app') as IAppLoader;

  const categoryRef = useRef<HTMLSelectElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const handleOnChange = () => {
    if (!categoryRef.current || !nameRef.current) return;
    setSearchParams({ category: categoryRef.current.value, name: nameRef.current.value });
  };

  const debounceHandleOnChange = useDebounceCallback(handleOnChange, 600);
  const name = searchParams.get('name') ?? ''; // Nullish coalescing - fallback value in simple terms.

  const renderOptions = (categories: string[]): ReactNode => (
    <>
      <option value="">Choose Category</option>
      {categories.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </>
  );

  return (
    <form id="search-form">
      <fieldset>
        <legend>Cocktail Parameters</legend>
        <div>
          <label htmlFor="name">Name</label>
          <input
            defaultValue={name}
            id="name"
            onChange={debounceHandleOnChange}
            ref={nameRef}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="select-categories">Categories</label>
          <select id="select-categories" onChange={handleOnChange} ref={categoryRef}>
            <Suspense fallback={<option>Loading...</option>}>
              <Await children={(c: string[]) => renderOptions(c)} resolve={categories} />
            </Suspense>
          </select>
        </div>
      </fieldset>
    </form>
  );
};
