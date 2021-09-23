import { getAuth } from 'firebase/auth';

export const uploadFile = async (url, formData) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      throw new Error('User not logged in');
    }

    const response = await fetch(url, {
      method: 'post',
      headers: {
        AuthToken: await user.getIdToken(),
      },
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Request Failed');
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
