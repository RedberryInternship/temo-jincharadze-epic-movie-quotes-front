import { useTranslation } from 'next-i18next';
import { Html, Head, NextScript, Main } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='font-Helvetica-Neue'>
        <div id='backdrop'></div>
        <div id='modal'></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
