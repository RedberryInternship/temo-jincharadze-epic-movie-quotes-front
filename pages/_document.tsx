import { Html, Head, NextScript, Main } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <div id='backdrop'></div>
        <div id='modal'></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
