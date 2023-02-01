import {
  ArrowDown,
  Close,
  Movie,
  useMovieDropDown,
  MovieDropDownTypes,
} from 'components';

const MovieDropDown = () => {
  const {
    i18n,
    register,
    getValues,
    requiredOption,
    t,
    handleOpen,
    isOpen,
    handleClose,
    data,
    setValue,
    setIsOpen,
    setSelectedMovie,
    selectedMovie,
  } = useMovieDropDown();

  return (
    <div className='relative' onBlur={handleClose}>
      <div
        className='flex bg-transparent pl-6 pr-9 mb-1 border-none bg-black w-full border items-center  justify-between flex-wrap py-8  relative rounded min-h-[5.4rem]'
        onClick={handleOpen}
      >
        {getValues('movie') ? (
          <span>{selectedMovie}</span>
        ) : (
          <p className='text-base md:text-xl flex items-center'>
            <Movie fill='#fff' />
            <span className='ml-3'>{t('quotes.chooseMovie')}</span>
          </p>
        )}
        {!isOpen && (
          <div className='cursor-pointer'>
            <ArrowDown />
          </div>
        )}
        <div
          className={`left-0 top-24 z-[15] absolute w-full bg-black pt-2 opacity-95 h-56 overflow-auto ${
            !isOpen && 'hidden'
          }`}
        >
          {data?.data.map((movie: MovieDropDownTypes) => (
            <div key={movie.id} className={`pb-2 px-2 rounded-sm mb-1 py-2 `}>
              <label htmlFor={movie.id.toString()!}>
                <div className='w-full cursor-pointer break-all'>
                  {i18n!.language === 'ka' ? movie.name.ka : movie.name.en}
                </div>
              </label>
              <input
                onClick={() => {
                  setValue('movie', movie.id.toString()!);
                  setSelectedMovie(
                    i18n.language === 'ka' ? movie.name.ka : movie.name.en
                  );
                  setIsOpen(false);
                }}
                id={movie.id.toString()}
                {...register('movie', requiredOption)}
                type='checkbox'
                className='hidden'
                value={movie.id}
              />
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <div
          className='absolute top-8 right-5 cursor-pointer'
          onClick={handleClose}
        >
          <Close />
        </div>
      )}
    </div>
  );
};

export default MovieDropDown;
