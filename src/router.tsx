import { createBrowserRouter } from 'react-router';
import { App } from './components/App';
import { HomeView, RCBlockingView, RCDeferredView } from './views';
import { AppLoader, RCBlockingLoader, RCDeferredLoader, SearchLoader } from './loaders';
import { SearchView } from './views/SearchView';

export const router = createBrowserRouter([
  {
    children: [
      { element: <HomeView />, index: true },
      { element: <RCBlockingView />, loader: RCBlockingLoader, path: 'random-blocking' },
      { Component: RCDeferredView, loader: RCDeferredLoader, path: 'random-deferred' },
      { element: <SearchView />, loader: SearchLoader, path: 'search' },
    ],
    id: 'app',
    element: <App />,
    loader: AppLoader,
    path: '/',
    errorElement: <div>An error occured...</div>,
    shouldRevalidate: () => false,
  },
]);
