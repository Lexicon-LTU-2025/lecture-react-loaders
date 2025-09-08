import { Outlet } from 'react-router';
import { Header } from '../Header';

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
