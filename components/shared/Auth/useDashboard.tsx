import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { showModalActions } from 'store';

const useDashboard = () => {
  const showPanel = useSelector(
    (state: { panel: { isOpen: boolean } }) => state.panel
  );

  const dispatch = useDispatch();
  const { push, query } = useRouter();

  const closeModals = () => {
    dispatch(showModalActions.setModalIsOpen(false));
    dispatch(showModalActions.setModalValue(''));
    query.show && push('/movie-list');
  };

  return { showPanel, closeModals };
};

export default useDashboard;
