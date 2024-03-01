import ContentContainer from '../../../components/articles/container/ContentContainer';
import ProfileContainer from '../../../components/articles/container/ProfileContainer';
import TitleContainer from '../../../components/articles/container/TitleContainer';
import Header from '../../../components/layout/Header';

export default function ArticlesPage({ params }: { params: { slug: string } }) {
  return (
    <section className="flex flex-col gap-12">
      <Header type="articles" />
      <TitleContainer />
      <ContentContainer contents={mockContents} />
      <ProfileContainer />
    </section>
  );
}

const mockContents: Array<Content> = [
  {
    id: 1,
    type: 'text',
    data: '텍스트 컨텐츠 1 텍스트 컨텐츠 1  텍스트 컨텐츠 1 텍스트 컨텐츠 1 텍스트 컨텐츠 1 텍스트 컨텐츠 1  텍스트 컨텐츠 1 텍스트 컨텐츠 1 텍스트 컨텐츠 1 텍스트 컨텐츠 1 텍스트 컨텐츠 1 텍스트 컨텐츠 1 텍스트 컨텐츠 1 텍스트 컨텐츠 1 텍스트 컨텐츠 1 텍스트 컨텐츠 1텍스트 컨텐츠 1 텍스트 컨텐츠 1 텍스트 컨텐츠 1 텍스트 컨텐츠 1 텍스트 컨텐츠 1 텍스트 컨텐츠 1',
  },
  {
    id: 2,
    type: 'image',
    data: '/images/sunny.jpg',
  },
  {
    id: 3,
    type: 'text',
    data: '텍스트 컨텐츠 2',
  },
  {
    id: 4,
    type: 'image',
    data: '/images/img2.jpg',
  },
];
