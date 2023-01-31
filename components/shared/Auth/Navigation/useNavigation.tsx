import { deleteCookie } from 'cookies-next';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { logout } from 'services';
import { showPanelActions } from 'store';

const useNavigation = () => {
  const dispatch = useDispatch();
  const { replace, pathname } = useRouter();

  const { t } = useTranslation('forms');

  const panelToggleHandler = () => {
    dispatch(showPanelActions.setPanel(true));
  };

  const logoutHandler = async () => {
    try {
      await logout();
      deleteCookie('isAuth');
      deleteCookie('XSRF-TOKEN');
      replace('/');
    } catch (error: any) {}
  };

  return { panelToggleHandler, logoutHandler, t, pathname };
};

export default useNavigation;
