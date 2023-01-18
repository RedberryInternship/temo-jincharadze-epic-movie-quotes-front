import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserInfo } from 'services';
import { userActions } from 'store';
import { deleteCookie, hasCookie } from 'cookies-next';

const useGetUserData = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const { pathname, replace } = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await getUserInfo();
        response.status === 200 &&
          dispatch(
            userActions.setUser({
              user: response.data.user,
              emails: response.data.emails,
            })
          );
      } catch (err) {
        if (pathname !== '/') {
          deleteCookie('XSRF-TOKEN');
          replace('/');
        }
      }
    };

    if (hasCookie('isAuth') && hasCookie('XSRF-TOKEN')) {
      getUserData();
    } else {
      deleteCookie('isAuth');
      deleteCookie('XSRF-TOKEN');
      replace('/');
    }
  }, [dispatch, pathname, replace]);

  return { isFocused, setIsFocused };
};

export default useGetUserData;
