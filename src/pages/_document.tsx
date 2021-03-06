import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import {Constants} from '../utils';

class DocumentRoute extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link href={Constants.fontFamily} media="all" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DocumentRoute;
