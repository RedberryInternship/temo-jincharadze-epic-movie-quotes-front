import { useGetUserData, useLike, useProfile } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { allQuotes, commentUpload } from 'services';

const useNewsFeed = () => {
  useGetUserData();
  const { name, image, avatarLoader, id } = useProfile();

  const { mutate: likeInstance } = useLike();

  const { i18n, t } = useTranslation('forms');

  const form = useForm<{ comment: string }>({
    mode: 'all',
    defaultValues: { comment: '' },
  });

  const { data: quotesData } = useQuery({
    queryKey: ['all quotes'],
    queryFn: allQuotes,
    retry: 0,
    refetchOnWindowFocus: false,
  });

  const { getValues, handleSubmit, setValue } = form;

  const queryClient = useQueryClient();

  const { mutate: commentInstance } = useMutation(commentUpload, {
    onSuccess: () => {
      queryClient.invalidateQueries('all quotes');
    },
  });

  const commentHandler = (quoteId: string) => {
    const newData = {
      user_id: id.toString()!,
      quote_id: quoteId,
      comment: getValues('comment'),
    };

    if (getValues('comment')) {
      commentInstance(newData);
      setValue('comment', '');
    }
  };

  const likeToggleHandler = (quoteId: string) => {
    likeInstance({ user_id: id.toString()!, quote_id: quoteId });
  };

  return {
    quotesData,
    i18n,
    name,
    image,
    avatarLoader,
    id,
    t,
    handleSubmit,
    form,
    commentHandler,
    likeToggleHandler,
  };
};

export default useNewsFeed;
