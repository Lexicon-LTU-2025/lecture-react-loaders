import type { ReactElement } from 'react';
import { NavLink, useNavigation } from 'react-router';
import { Spinner } from '../components';

export const HomeView = (): ReactElement => {
  const { state } = useNavigation();

  return (
    <main id="home-view">
      <h2>Home View</h2>
      <button className="link-btn">
        <NavLink className="link" to="/random">
          {state === 'loading' ? <Spinner /> : 'To random cocktail view - Blocking'}
        </NavLink>
      </button>
      <button className="link-btn">
        <NavLink className="link" to="/random-async">
          To random cocktail view deferred
        </NavLink>
      </button>
    </main>
  );
};
