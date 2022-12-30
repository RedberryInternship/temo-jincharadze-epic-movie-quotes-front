import { Html, Head, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <div id='backdrop'></div>
        <div id='modal'></div>
        <NextScript />
      </body>
    </Html>
  );
}
