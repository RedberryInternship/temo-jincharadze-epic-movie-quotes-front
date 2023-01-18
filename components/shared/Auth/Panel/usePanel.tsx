import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { showPanelActions } from 'store';
import { User } from 'types';

const usePanel = () => {
  const userInfo = useSelector((state: { user: User }) => state.user);
  const dispatch = useDispatch();

  const { name, image } = userInfo.user;
  const { asPath } = useRouter();

  const avatarLoader = () => {
    return image;
  };

  const panelCloseHandler = () => {
    dispatch(showPanelActions.setPanel(false));
  };

  return { name, image, asPath, avatarLoader, panelCloseHandler };
};

export default usePanel;
