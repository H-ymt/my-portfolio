import { getWorksDetail } from '@/app/libs/microcms';
import { Metadata } from 'next';
import Article from '@/components/Article';
import Sheet from '@/components/Sheet';

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk: string;
  };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const data = await getWorksDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return {};
}

export default async function Page({ params, searchParams }: Props) {
  const data = await getWorksDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return (
    <>
      <Article data={data} />
    </>
  );
}