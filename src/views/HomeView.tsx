import type { ReactElement } from 'react';
import { NavLink, useNavigation } from 'react-router';
import { Spinner } from '../components';

export const HomeView = (): ReactElement => {
  // Returns the currenct navigation object. It includes the state of the navigation which we can use to render som UI when the navigation is 'ongoing'.
  const { state } = useNavigation();

  return (
    <main id="home-view">
      <button className="link-btn">
        <NavLink className="link" to="/random-blocking">
          {state === 'loading' ? <Spinner /> : 'To Random Cocktail View - Blocking'}
        </NavLink>
      </button>
    </main>
  );
};
