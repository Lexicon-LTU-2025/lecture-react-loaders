import { useRef } from 'react';
import { useSearchParams } from 'react-router';

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const nameRef = useRef<HTMLInputElement>(null);

  const handleOnChange = () => {
    if (!nameRef.current) return;
    setSearchParams({ name: nameRef.current.value });
  };

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
            onChange={handleOnChange}
            ref={nameRef}
            type="text"
          />
        </div>
      </fieldset>
    </form>
  );
};
