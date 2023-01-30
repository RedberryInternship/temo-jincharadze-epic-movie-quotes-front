import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(function () {
    return new QueryClient();
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp);
