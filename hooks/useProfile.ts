import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { showPanelActions } from 'store';
import { User } from 'types';

const useProfile = () => {
  const userInfo = useSelector((state: { user: User }) => state.user);
  const dispatch = useDispatch();

  const { t } = useTranslation('forms');

  const { name, image, id } = userInfo.user;
  const { pathname } = useRouter();

  const avatarLoader = () => {
    return image;
  };

  const panelCloseHandler = () => {
    dispatch(showPanelActions.setPanel(false));
  };

  return { name, image, avatarLoader, panelCloseHandler, pathname, id, t };
};

export default useProfile;
