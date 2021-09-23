import React from 'react';
import Spinner from '../UI/Spinner';
import NewPhotoButton from './NewPhotoButton';
import PhotosListItem from './PhotosListItem';

export default function MyPhotosList({ isLoading, photos = [] }) {
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="photos-list">
      {photos.map((photo) => (
        <PhotosListItem key={photo._id} photo={photo} />
      ))}
      <NewPhotoButton />
    </div>
  );
}
