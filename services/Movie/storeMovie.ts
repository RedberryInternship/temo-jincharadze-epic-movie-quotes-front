import instance from 'services/axios';

const storeMovie = (data: any) => {
  return instance.post('/api/auth/movie-upload', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export default storeMovie;
