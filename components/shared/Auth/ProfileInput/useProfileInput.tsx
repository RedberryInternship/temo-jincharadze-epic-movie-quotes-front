import { useFormContext } from 'react-hook-form';

const useProfileInput = () => {
  const { register } = useFormContext();
  return { register };
};

export default useProfileInput;
