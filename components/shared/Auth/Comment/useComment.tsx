import { useFormContext } from 'react-hook-form';

const useComment = () => {
  const { register } = useFormContext();

  return { register };
};

export default useComment;
