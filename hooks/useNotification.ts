import { useEffect } from 'react';
import { usePusher } from 'config';
import { useQuery, useQueryClient } from 'react-query';
import { userNotifications } from 'services';
import useProfile from './useProfile';

const useNotification = () => {
  const { echo } = usePusher();
  const { id } = useProfile();

  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['user notifications'],
    queryFn: userNotifications,
    retry: 0,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (echo && id) {
      echo.private(`epic-quotes.${id}`).listen('.notifications', () => {
        queryClient.invalidateQueries('user notifications');
      });
    }

    return () => echo?.leave(`epic-quotes.${id}`);
  }, [id, echo]);

  return { data };
};

export default useNotification;
