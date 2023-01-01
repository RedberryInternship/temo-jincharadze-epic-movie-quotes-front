const Message: React.FC<{ message: string }> = ({ message }) => {
  return (
    <p className='text-base font-normal text-custom-orange-600 pl-5 whitespace-nowrap'>
      {message}
    </p>
  );
};

export default Message;
