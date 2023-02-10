import Echo from 'laravel-echo';
import { useEffect, useState } from 'react';
import { axios } from 'services';

const usePusher = () => {
  const [echo, setEcho] = useState<{ private: Function; leave: Function }>();

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const pusher = require('pusher-js');
      window.pusher = pusher;

      const echoInstance = new Echo({
        broadcaster: 'pusher',
        key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
        cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
        forceTLS: true,
        authorizer: (channel: { name: string }) => {
          return {
            authorize: (socketId: number, callback: Function) => {
              axios
                .post('/api/broadcasting/auth', {
                  socket_id: socketId,
                  channel_name: channel.name,
                })
                .then((response) => {
                  callback(null, response.data);
                })
                .catch((error) => {
                  callback(error);
                });
            },
          };
        },
      });

      setEcho(echoInstance);
    }
  }, []);

  return { echo };
};

export default usePusher;
