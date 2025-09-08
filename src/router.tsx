import { createBrowserRouter } from 'react-router';
import { App } from './components/App';
import { RCDeferredLoader, RCBlockingLoader } from './loaders';
import { HomeView, RCDeferredView, RCBlockingView } from './views';

export const router = createBrowserRouter([
  {
    children: [
      { element: <HomeView />, index: true },
      { element: <RCBlockingView />, loader: RCBlockingLoader, path: 'random' },
      { element: <RCDeferredView />, loader: RCDeferredLoader, path: 'random-async' },
    ],
    element: <App />,
    path: '/',
  },
]);
