import { MovieInputProps } from './types';
import { useMovieInput } from 'components';

const MovieInput: React.FC<MovieInputProps> = (props) => {
  const { register } = useMovieInput();

  return (
    <>
      {props.mode === 'textarea' ? (
        <div className={props.containerClass}>
          <div className='relative'>
            <textarea
              value={props.value}
              disabled={props.disabled}
              {...register(props.name!, props.options)}
              name={props.name}
              placeholder={props.placeholder}
              className={`text-white bg-transparent pl-4 pr-12 py-3 md:text-xl h-[5.4rem] placeholder-white border-custom-gray-500 rounded w-full border focus:ring-0  text-base focus:outline-none focus:border-custom-gray-500  border-solid  outline-none font-normal ${props.textAreaClass}`}
            />
            <p className='absolute top-2.5 right-4 text-base md:text-xl font-normal text-custom-gray-500'>
              {props.language}
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className={props.containerClass}>
            {props.label && (
              <div className='mb-2'>
                <label className='text-white text-base font-normal'>
                  {props.label}
                </label>
              </div>
            )}
            <div className='relative'>
              <input
                {...register(props.name!, props.options)}
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                className={`text-white bg-transparent pl-4 pr-11 py-3 h-12 placeholder-white border-custom-gray-500 rounded w-full border focus:ring-0  text-base md:text-xl focus:outline-none focus:border-custom-gray-500  border-solid  outline-none font-normal`}
              />
              <p className='absolute top-2.5 right-4 text-base md:text-xl font-normal text-custom-gray-500'>
                {props.language}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MovieInput;
