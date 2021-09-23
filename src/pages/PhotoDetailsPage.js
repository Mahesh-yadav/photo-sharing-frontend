import React from 'react';
import { useParams } from 'react-router-dom';
import { useProtectedFetch } from '../api/useProtectedFetch';
import Spinner from '../components/UI/Spinner';
import { useUser } from '../components/auth/useUser';
import SharedEmailsList from '../components/photos/SharedEmailsList';
import { postWithCredentials } from '../api/postWithCredentials';

export default function PhotoDetailsPage() {
  const { photoId } = useParams();
  const { user } = useUser();

  const {
    isLoading,
    data: photo,
    setData: setPhoto,
  } = useProtectedFetch(`/photos/${photoId}`);

  const isUserOwner = user.uid === photo?.data?.ownerId;

  const onSharePhoto = async (email) => {
    const updatedPhoto = await postWithCredentials(`/photos/${photoId}/share`, {
      email,
    });

    if (updatedPhoto) {
      setPhoto(updatedPhoto);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="centered-container">
      <h1>{photo?.data?.title}</h1>
      <img src={photo?.data?.url} width="750" alt={photo?.data?.title} />
      <div>
        {isUserOwner ? (
          <SharedEmailsList
            emails={photo?.data?.sharedWithEmails}
            onSharePhoto={onSharePhoto}
          />
        ) : null}
      </div>
    </div>
  );
}
