import instance from 'services/axios';

const updateGoogleProfile = (data: {
  username: string;
  userId: number;
  image?: string | File;
}) => {
  return instance.post(`/api/auth/update-profile/?_method=put`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export default updateGoogleProfile;
