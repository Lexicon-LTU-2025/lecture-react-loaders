import { Outlet } from 'react-router';
import { Header } from '.';

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
