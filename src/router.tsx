import { createBrowserRouter } from 'react-router';
import { App } from './components/App';
import { HomeView } from './views';

export const router = createBrowserRouter([
  {
    children: [{ element: <HomeView />, index: true }],
    element: <App />,
    path: '/',
  },
]);
