import { useQuery } from 'react-query';
import { getMovieTags } from 'services';

const useGetAllTags = () => {
  const { data } = useQuery({
    queryKey: ['tags'],
    queryFn: getMovieTags,
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  return { data };
};

export default useGetAllTags;
