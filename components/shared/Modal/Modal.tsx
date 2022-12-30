import { createPortal } from 'react-dom';
import { BackDrop } from 'components';
import { ModalProps } from './types';

const Modal: React.FC<ModalProps> = (props) => {
  if (typeof window === 'object') {
    return (
      <>
        {createPortal(
          <BackDrop onClose={props.onClose} />,
          document.getElementById('backdrop')!
        )}
        {createPortal(
          <div className='fixed z-[6] text-white'>{props.children}</div>,
          document.getElementById('modal')!
        )}
      </>
    );
  }
  return null;
};

export default Modal;
