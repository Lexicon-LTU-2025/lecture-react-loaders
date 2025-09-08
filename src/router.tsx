import { createBrowserRouter } from 'react-router';
import { App } from './components/App';
import { HomeView, RCBlockingView } from './views';
import { RCBlockingLoader } from './loaders';

export const router = createBrowserRouter([
  {
    children: [
      { element: <HomeView />, index: true },
      { element: <RCBlockingView />, loader: RCBlockingLoader , path: 'random-blocking' },
    ],
    element: <App />,
    path: '/',
  },
]);
