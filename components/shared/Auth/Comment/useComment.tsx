import { useProfile } from 'hooks';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { commentUpload } from 'services';

const useComment = () => {
  const { id } = useProfile();

  const form = useForm<{ comment: string }>({
    mode: 'all',
    defaultValues: { comment: '' },
  });

  const { getValues, handleSubmit, setValue, register } = form;

  const queryClient = useQueryClient();

  const { mutate: commentInstance } = useMutation(commentUpload, {
    onSuccess: () => {
      queryClient.invalidateQueries('all quotes');
      queryClient.invalidateQueries('selected movie');
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

  return { register, form, handleSubmit, commentHandler };
};

export default useComment;
