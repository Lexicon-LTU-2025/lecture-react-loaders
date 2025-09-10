import { useRef } from 'react';
import { useSearchParams } from 'react-router';
import { useDebounceCallback } from 'usehooks-ts';

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const nameRef = useRef<HTMLInputElement>(null);

  const handleOnChange = () => {
    if (!nameRef.current) return;
    setSearchParams({ name: nameRef.current.value });
  };

  const debounceHandleOnChange = useDebounceCallback(handleOnChange, 600);

  const name = searchParams.get('name') ?? ''; // Nullish coalescing - fallback value in simple terms.

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
      </fieldset>
    </form>
  );
};
