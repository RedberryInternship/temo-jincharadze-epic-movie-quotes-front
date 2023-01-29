import { useFormContext } from 'react-hook-form';

const useInput = (name: string) => {
  const { getFieldState, register } = useFormContext();

  const { invalid, isDirty } = getFieldState(name);

  return { invalid, isDirty, register };
};

export default useInput;
