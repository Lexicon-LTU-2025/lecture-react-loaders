import { createBrowserRouter } from 'react-router';
import { App } from './components/App';
import { HomeView, RCBlockingView, RCDeferredView } from './views';
import { RCBlockingLoader, RCDeferredLoader } from './loaders';
import { SearchView } from './views/SearchView';

export const router = createBrowserRouter([
  {
    children: [
      { element: <HomeView />, index: true },
      { element: <RCBlockingView />, loader: RCBlockingLoader, path: 'random-blocking' },
      { Component: RCDeferredView, loader: RCDeferredLoader, path: 'random-deferred' },
      { element: <SearchView/>, path: 'search' },
    ],
    element: <App />,
    path: '/',
    errorElement: <div>An error occured...</div>,
  },
]);
