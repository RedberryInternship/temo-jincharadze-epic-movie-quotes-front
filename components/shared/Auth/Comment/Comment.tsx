import { CommentTypes } from './types';
import { useComment } from 'components';
import { FormProvider } from 'react-hook-form';

const Comment: React.FC<CommentTypes> = (props) => {
  const { register, form, handleSubmit, commentHandler } = useComment();

  return (
    <div className={props.containerClass}>
      <FormProvider {...form}>
        <form
          className='w-full'
          onSubmit={handleSubmit(() =>
            commentHandler(props.quoteId!, props.movieId!)
          )}
        >
          <input
            {...register('comment')}
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            className={`text-custom-gray-300 bg-transparent text-base md:text-xl pl-4 pr-1 py-2 h-10 placeholder-custom-gray-300 border-none focus:border-none bg-zinc-800 focus:ring-0 rounded-xl w-full outline-none ${props.inputClass}`}
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default Comment;
