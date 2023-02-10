import { deleteCookie } from 'cookies-next';
import { useNotification } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { logout, readNotification } from 'services';
import { showPanelActions } from 'store';

const useNavigation = () => {
  const { data: userNotification } = useNotification();
  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);

  const refEl = useRef<HTMLDivElement>(null);
  const refRing = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const toggleBlurHandler = (event: MouseEvent) => {
      if (
        refEl.current &&
        !refRing.current?.contains(event.target as Node) &&
        !refEl.current.contains(event.target as Node)
      ) {
        setIsNotificationOpen(false);
      }

      if (refRing.current && refRing.current?.contains(event.target as Node)) {
        setIsNotificationOpen((prev) => !prev);
      }
    };
    document.addEventListener('click', toggleBlurHandler, true);
    return () => document.removeEventListener('click', toggleBlurHandler, true);
  }, []);

  const dispatch = useDispatch();
  const { replace, pathname, push } = useRouter();

  const { t } = useTranslation('forms');

  const panelToggleHandler = () => {
    dispatch(showPanelActions.setPanel(true));
  };

  const filterHasNew = userNotification?.data.filter(
    (notification: { has_new: number }) => notification.has_new === 1
  );

  const logoutHandler = async () => {
    try {
      await logout();
      deleteCookie('isAuth');
      deleteCookie('XSRF-TOKEN');
      replace('/');
    } catch (error: any) {}
  };

  const queryClient = useQueryClient();

  const { mutate } = useMutation(readNotification);

  const readHandler = (quoteId: number, movieId: number) => {
    mutate({ quote_id: quoteId });
    push(`/movie-list/${movieId}?show=view-quote&id=${quoteId}`);
    queryClient.removeQueries('selected movie');
    setIsNotificationOpen(false);
  };

  const markAllReadHandler = () => {
    mutate({ markAllAsRead: true });
    queryClient.invalidateQueries('user notifications');
  };

  return {
    panelToggleHandler,
    logoutHandler,
    t,
    pathname,
    isNotificationOpen,
    userNotification,
    readHandler,
    filterHasNew,
    refEl,
    markAllReadHandler,
    refRing,
  };
};

export default useNavigation;
