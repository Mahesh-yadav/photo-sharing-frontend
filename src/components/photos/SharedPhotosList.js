import React from 'react';
import Spinner from '../UI/Spinner';
import PhotosListItem from './PhotosListItem';

export default function SharedPhotosList({ isLoading, photos = [] }) {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="photos-list">
      {photos.map((photo) => (
        <PhotosListItem key={photo._id} photo={photo} />
      ))}
    </div>
  );
}
