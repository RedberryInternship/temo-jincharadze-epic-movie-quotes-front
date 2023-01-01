const Message: React.FC<{ message: string }> = ({ message }) => {
  return (
    <p className='text-sm font-normal text-red-500 pl-1 whitespace-nowrap'>
      {message}
    </p>
  );
};

export default Message;
