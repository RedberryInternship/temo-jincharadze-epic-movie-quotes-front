import { deleteCookie } from 'cookies-next';
import { useProfile } from 'hooks';
import { useRouter } from 'next/router';
import { logout } from 'services';

const usePanel = () => {
  const { name, image, avatarLoader, panelCloseHandler, pathname, t } =
    useProfile();

  const router = useRouter();

  const logoutHandler = async () => {
    try {
      await logout();
      deleteCookie('isAuth');
      deleteCookie('XSRF-TOKEN');
      router.replace('/');
    } catch (error: any) {}
  };
  return {
    name,
    image,
    avatarLoader,
    panelCloseHandler,
    pathname,
    t,
    logoutHandler,
  };
};

export default usePanel;
