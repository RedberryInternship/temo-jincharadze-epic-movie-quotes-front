import { useFormContext } from 'react-hook-form';

const useInput = (name: string) => {
  const { getFieldState } = useFormContext();
  const { invalid, isTouched } = getFieldState(name);

  return { invalid, isTouched };
};

export default useInput;
