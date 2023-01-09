const Message: React.FC<{ message: string }> = (props) => {
  return (
    <p className='text-sm font-normal text-red-500 pl-1 whitespace-nowrap'>
      {props.message}
    </p>
  );
};

export default Message;
