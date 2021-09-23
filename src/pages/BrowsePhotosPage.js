import React from 'react';
import { useProtectedFetch } from '../api/useProtectedFetch';
import MyPhotosList from '../components/photos/MyPhotosList';
import SharedPhotosList from '../components/photos/SharedPhotosList';

export default function BrowsePhotosPage() {
  const { isLoading: isLoadingMyPhotos, data: myPhotos } =
    useProtectedFetch('/photos/my');

  const { isLoading: isLoadingShared, data: sharedPhotos } =
    useProtectedFetch('/photos/shared');

  return (
    <div>
      <h2 className="section-heading">My Photos</h2>
      <MyPhotosList isLoading={isLoadingMyPhotos} photos={myPhotos.data} />
      <h2 className="section-heading">Photos Shared With Me</h2>
      <SharedPhotosList
        isLoading={isLoadingShared}
        photos={sharedPhotos.data}
      />
    </div>
  );
}
