import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { verifyEmail } from 'services';

const useVerify = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  let link: string;

  const checkEmail = async () => {
    try {
      let url = new URL(query.verify?.toString()!);
      let params = new URLSearchParams(url.search);
      params.append('expires', query.expires as string);
      params.append('signature', query.signature as string);
      link = '/api/verify-account' + '?' + params;
    } catch (err) {}
  };

  checkEmail();

  const { data } = useQuery({
    queryKey: ['verify email'],
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
    enabled: !!query.verify && !!query.signature && !!query.expires,
    queryFn: async () => verifyEmail(link),
  });
  return { data, dispatch };
};

export default useVerify;
