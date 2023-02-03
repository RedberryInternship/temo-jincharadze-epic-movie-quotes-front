import { useGetUserData, useLike, useProfile } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useInfiniteQuery } from 'react-query';
import { allQuotes } from 'services';

const useNewsFeed = () => {
  useGetUserData();
  const { name, image, avatarLoader, id } = useProfile();

  const { mutate: likeInstance } = useLike();

  const { query } = useRouter();

  const { i18n, t } = useTranslation('forms');

  const {
    fetchNextPage,
    hasNextPage,
    data: quotesData,
    isSuccess,
  } = useInfiniteQuery(
    ['all quotes', query],
    (pageParam) => allQuotes(pageParam as { pageParam: number }, query),
    {
      getNextPageParam: (page) =>
        page.data.last_page === page.data.current_page
          ? undefined
          : page.data.current_page + 1,

      refetchOnWindowFocus: false,
    }
  );

  const likeToggleHandler = (quoteId: string, movieId: string) => {
    likeInstance({
      user_id: id.toString()!,
      quote_id: quoteId,
      movie_id: movieId,
    });
  };

  return {
    quotesData,
    i18n,
    name,
    image,
    avatarLoader,
    id,
    t,
    likeToggleHandler,
    fetchNextPage,
    hasNextPage,
    isSuccess,
    query,
  };
};

export default useNewsFeed;
