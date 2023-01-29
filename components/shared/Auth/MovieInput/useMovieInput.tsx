import { useFormContext } from 'react-hook-form';

const useMovieInput = () => {
  const { register } = useFormContext();
  return { register };
};

export default useMovieInput;
