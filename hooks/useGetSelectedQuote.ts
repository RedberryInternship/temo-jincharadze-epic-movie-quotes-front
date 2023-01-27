import { useQuery } from 'react-query';
import { getQuote } from 'services';

const useGetSelectedQuote = (id: number) => {
  const { data } = useQuery({
    queryKey: ['selected quote'],
    queryFn: () => getQuote(id),
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
  return { data };
};

export default useGetSelectedQuote;
