import Document, {
  Head,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';

const globalStyles = `
  body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <style>{globalStyles}</style>
          <meta name="description" content="社区"></meta>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link type="text/css" rel="stylesheet" href="/static/quill-emoji.css" />
          <link type="text/css" rel="stylesheet" href="/static/quill.snow.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
