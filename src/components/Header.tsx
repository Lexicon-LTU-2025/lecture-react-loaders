import type { ReactElement } from 'react';
import { NavLink } from 'react-router';

export const Header = (): ReactElement => {
  return (
    <header id="header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/search">Search</NavLink>
    </header>
  );
};
