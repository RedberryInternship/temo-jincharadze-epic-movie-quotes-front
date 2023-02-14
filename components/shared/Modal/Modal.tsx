import { createPortal } from 'react-dom';
import { BackDrop } from 'components';
import { ModalProps } from './types';

const Modal: React.FC<ModalProps> = (props) => {
  return typeof window === 'object' ? (
    <>
      {createPortal(
        <BackDrop onClose={props.onClose} mode={props.mode} />,
        document.getElementById('backdrop')!
      )}
      {createPortal(
        <div className='fixed z-[6] text-white'>{props.children}</div>,
        document.getElementById('modal')!
      )}
    </>
  ) : null;
};

export default Modal;
