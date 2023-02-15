import dynamic from 'next/dynamic';
import React, { Fragment, ReactNode } from 'react';

const SsrWrapper = ({ children }: { children: ReactNode }) => (
  <Fragment>{children}</Fragment>
);
export default dynamic(() => Promise.resolve(SsrWrapper), {
  ssr: false,
});
