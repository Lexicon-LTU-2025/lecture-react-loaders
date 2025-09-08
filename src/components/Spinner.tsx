import type { ReactElement } from 'react';

export const Spinner = (): ReactElement => {
  return (
    <div className="spinner">
      <div className="loader"></div>
    </div>
  );
};
