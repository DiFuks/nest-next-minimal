import { NextPage } from 'next';
import Head from 'next/head';

import { IIndexPageResponse } from '../../dto/IIndexPageResponse';

const Index: NextPage<IIndexPageResponse> = ({ title, content }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    {content}
  </>
);

Index.getInitialProps = ({ query }) => {
  return query as unknown as IIndexPageResponse;
}

export { Index as default };
