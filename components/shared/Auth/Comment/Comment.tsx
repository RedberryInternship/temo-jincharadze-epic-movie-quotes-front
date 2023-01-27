import { CommentTypes } from './types';

const Comment: React.FC<CommentTypes> = (props) => {
  return (
    <div className={props.containerClass}>
      <input
        {...props.register}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className={`text-custom-gray-300 bg-transparent text-base md:text-xl pl-4 pr-1 py-2 h-10 placeholder-custom-gray-300 border-none focus:border-none bg-zinc-800 focus:ring-0 rounded-xl w-full outline-none ${props.inputClass}`}
      />
    </div>
  );
};

export default Comment;
