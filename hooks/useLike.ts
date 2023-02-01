import { useMutation, useQueryClient } from 'react-query';
import { likeToggle } from 'services';

const useLike = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(likeToggle, {
    onSuccess: () => {
      queryClient.invalidateQueries('selected movie');
      queryClient.invalidateQueries('user movies');
      queryClient.invalidateQueries('all quotes');
    },
  });

  return { mutate };
};

export default useLike;
