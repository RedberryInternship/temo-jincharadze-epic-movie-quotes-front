import { createPortal } from 'react-dom';
import { BackDrop } from 'components';
import { ModalProps } from './types';

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <>
      {createPortal(
        <BackDrop onClick={props.onClick} />,
        document.getElementById('backdrop')!
      )}
      {createPortal(
        <div className='fixed z-[6] text-white'>{props.children}</div>,
        document.getElementById('modal')!
      )}
    </>
  );
};

export default Modal;
