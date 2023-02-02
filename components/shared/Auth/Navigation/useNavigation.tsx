import { deleteCookie } from 'cookies-next';
import { useNotification } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { logout, readNotification } from 'services';
import { showPanelActions } from 'store';

const useNavigation = () => {
  const { data: userNotification } = useNotification();

  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { replace, pathname, push } = useRouter();

  const { t } = useTranslation('forms');

  const panelToggleHandler = () => {
    dispatch(showPanelActions.setPanel(true));
  };

  const notificationToggleHandler = () => {
    setIsNotificationOpen((prev) => !prev);
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
    notificationToggleHandler,
    isNotificationOpen,
    userNotification,
    readHandler,
    filterHasNew,
    markAllReadHandler,
  };
};

export default useNavigation;
