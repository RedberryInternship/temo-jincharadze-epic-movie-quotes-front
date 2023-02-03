import { useEffect } from 'react';
import { pusher } from 'config';
import Echo from 'laravel-echo';
import { useQuery, useQueryClient } from 'react-query';
import { userNotifications } from 'services';
import useProfile from './useProfile';

const useNotification = () => {
  const { id } = useProfile();

  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['user notifications'],
    queryFn: userNotifications,
    retry: 0,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    pusher();
    if (id) {
      window.Echo.private(`epic-quotes.${id}`).listen('.notifications', () => {
        queryClient.invalidateQueries('user notifications');
      });
    }
  }, [id]);

  return { data };
};

export default useNotification;
