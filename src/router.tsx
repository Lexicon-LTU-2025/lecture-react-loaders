import { createBrowserRouter } from 'react-router';
import { App } from './components/App';
import { HomeView, RCBlockingView } from './views';

export const router = createBrowserRouter([
  {
    children: [
      { element: <HomeView />, index: true },
      { element: <RCBlockingView />, path: 'random-blocking' },
    ],
    element: <App />,
    path: '/',
  },
]);
