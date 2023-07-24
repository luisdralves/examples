import { Locale } from '@/i18n-routes';
import { NextPage } from 'next';

type Props = {
  params: {
    articleId: string;
    categoryId: string;
    locale: Locale;
  };
};

const Page: NextPage<Props> = ({ params }: Props) => {
  return (
    <main>
      <h1>{'Article details'}</h1>

      <p>{JSON.stringify(params)}</p>
    </main>
  );
};

export default Page;
