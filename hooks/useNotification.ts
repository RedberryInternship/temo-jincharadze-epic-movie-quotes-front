import { useQuery } from 'react-query';
import { userNotifications } from 'services';

const useNotification = () => {
  const { data } = useQuery({
    queryKey: ['user notifications'],
    queryFn: userNotifications,
    retry: 0,
    refetchOnWindowFocus: false,
  });

  return { data };
};

export default useNotification;
