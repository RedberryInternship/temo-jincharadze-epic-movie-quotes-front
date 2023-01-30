import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import { deleteQuote } from 'services';

const useQuoteDelete = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { query, push } = router;

  const { mutate } = useMutation(deleteQuote, {
    onSuccess: () => {
      queryClient.invalidateQueries('selected movie');
      push(`/movie-list/${query.movieId}`);
    },
  });

  return { mutate };
};

export default useQuoteDelete;
