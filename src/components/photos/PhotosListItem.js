import React from 'react';
import { Link } from 'react-router-dom';

export default function PhotosListItem({ photo }) {
  return (
    <Link to={`/photos/${photo._id}`}>
      <div className="photos-list-item-wrap">
        <img
          className="photos-list-item"
          src={photo.url}
          alt={photo.title}
          height="200"
          width="200"
        />
      </div>
    </Link>
  );
}
