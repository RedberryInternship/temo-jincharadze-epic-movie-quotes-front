import { useFormContext } from 'react-hook-form';

const useInput = (name: string) => {
  const { getFieldState } = useFormContext();

  const { invalid, isDirty } = getFieldState(name);

  return { invalid, isDirty };
};

export default useInput;
