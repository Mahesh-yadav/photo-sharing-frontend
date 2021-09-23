import SignInPage from '../pages/SignInPage';
import BrowsePhotosPage from '../pages/BrowsePhotosPage';

export const routes = [
  {
    path: '/sign-in',
    Component: SignInPage,
    private: false,
    exact: true,
  },
  {
    path: '/',
    Component: BrowsePhotosPage,
    private: true,
    exact: true,
  },
];
