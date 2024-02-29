import Header from '../../../components/layout/Header';

export default function ArticlesPage({ params }: { params: { slug: string } }) {
  return (
    <section>
      <Header type="articles" />
    </section>
  );
}
