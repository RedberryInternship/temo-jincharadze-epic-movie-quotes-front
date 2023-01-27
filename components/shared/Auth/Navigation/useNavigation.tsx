import { deleteCookie } from 'cookies-next';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { logout } from 'services';
import { showPanelActions } from 'store';

const useNavigation = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { t } = useTranslation('forms');

  const panelToggleHandler = () => {
    dispatch(showPanelActions.setPanel(true));
  };

  const logoutHandler = async () => {
    try {
      await logout();
      deleteCookie('isAuth');
      deleteCookie('XSRF-TOKEN');
      router.replace('/');
    } catch (error: any) {}
  };

  return { panelToggleHandler, logoutHandler, t };
};

export default useNavigation;
