export type MovieInputProps = {
  containerClass?: string;
  label?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  language?: string;
  disabled?: boolean;
  textAreaClass?: string;
  value?: string;
  options?: object;
  mode?: string;
};

export type MovieTags = {
  id: number;
  name: { en: string; ka: string };
};

export type ViewQuoteInputTypes = {
  containerClass?: string;
  label?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  language?: string;
  disabled?: boolean;
  textAreaClass?: string;
  value?: string;
};
