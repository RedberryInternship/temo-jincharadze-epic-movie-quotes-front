import { Close, TagClose, useMovieSelect } from 'components';
import { MovieTags } from './types';

const MovieSelect = () => {
  const {
    data,
    tagNames,
    i18n,
    register,
    getValues,
    dropDownRef,
    requiredOption,
    t,
    removeTagHandler,
    handleOpen,
    isOpen,
    handleClose,
  } = useMovieSelect();

  return (
    <div className='relative' onBlur={handleClose}>
      <div
        className='flex bg-transparent pl-5 pr-8 border-custom-gray-500 rounded w-full border items-center flex-wrap min-h-[3rem] pb-1 relative'
        onClick={handleOpen}
      >
        {tagNames ? (
          tagNames.map((data: MovieTags) => (
            <div key={data.id} className='flex flex-wrap w-max '>
              <span className=' bg-custom-gray-500 w-max pl-2 h-7 mr-[0.6rem] flex items-center justify-center mt-1 rounded-sm text-sm font-normal'>
                {i18n.language === 'ka' ? data.name.ka : data.name.en}
                <div
                  className='px-2 cursor-pointer'
                  onClick={() => removeTagHandler(data.id.toString())}
                >
                  <TagClose />
                </div>
              </span>
            </div>
          ))
        ) : (
          <span className='text-base opacity-60 md:text-xl'>
            {t('selectGenre')}
          </span>
        )}
      </div>
      {isOpen && (
        <div
          className='absolute top-3.5 right-2 cursor-pointer'
          onClick={handleClose}
        >
          <Close />
        </div>
      )}
      <div
        ref={dropDownRef}
        className={`left-0 z-[15] absolute w-full bg-custom-neutral-900 pt-2 opacity-95 h-56 overflow-auto ${
          !isOpen && 'hidden'
        }`}
      >
        {data?.data.map((tag: MovieTags) => (
          <div
            key={tag.id}
            className={`pb-2 px-2 rounded-sm mb-1 py-2 ${
              getValues('tags').includes(tag.id.toString())
                ? ' bg-custom-zinc-800'
                : ''
            }`}
          >
            <label htmlFor={tag.id.toString()}>
              <div className='w-full'>
                {i18n!.language === 'ka' ? tag.name.ka : tag.name.en}
              </div>
            </label>
            <input
              id={tag.id.toString()}
              {...register('tags', requiredOption)}
              type='checkbox'
              className='hidden'
              value={tag.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSelect;
