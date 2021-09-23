import SignInPage from '../pages/SignInPage';
import BrowsePhotosPage from '../pages/BrowsePhotosPage';
import UploadPhotoPage from '../pages/UploadPhotoPage';
import PhotoDetailsPage from '../pages/PhotoDetailsPage';

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
  {
    path: '/upload-photo',
    Component: UploadPhotoPage,
    private: true,
    exact: true,
  },
  {
    path: '/photos/:photoId',
    Component: PhotoDetailsPage,
    private: true,
    exact: true,
  },
];
