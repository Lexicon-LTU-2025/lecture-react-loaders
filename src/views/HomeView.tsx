import type { ReactElement } from 'react';
import { NavLink } from 'react-router';

export const HomeView = (): ReactElement => {
  return (
    <main id="home-view">
      <button className="link-btn">
        <NavLink className="link" to="/random-blocking">
          To Random Cocktail View - Blocking
        </NavLink>
      </button>
    </main>
  );
};
