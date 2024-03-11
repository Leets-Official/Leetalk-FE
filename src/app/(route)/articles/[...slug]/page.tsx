'use client';

import ContentContainer from '../../../components/articles/container/ContentContainer';
import ProfileContainer from '../../../components/articles/container/ProfileContainer';
import TitleContainer from '../../../components/articles/container/TitleContainer';
import Header from '../../../components/layout/Header';
import { useEffect, useState } from 'react';

export default function ArticlesPage({ params }: { params: { slug: string } }) {
  console.log('params', params);
  const slug = params.slug[0];
  const [data, setData] = useState<Article | null>(null);
  useEffect(() => {
    if (slug) {
      fetchData(slug);
    }
  }, [slug]);

  const fetchData = async (slug: string) => {
    try {
      console.log('slug type:', typeof slug);
      const url = `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/articles/${slug}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const responseData = await response.json();
      console.log('responseData', responseData);
      if (responseData.data != undefined) {
        setData(responseData.data);
      }
    } catch (error) {
      console.error('Error occurred while fetching data:', error);
    }
  };

  if (data) {
    const {
      content,
      category,
      title,
      subtitle,
      coverImgName,
      tags,
      writerName,
      writerBio,
      writerProfileImgName,
      createdAt,
    }: Article = data;

    return (
      <section className="flex flex-col gap-12 items-center w-full max-w-[1920px] min-h-screen">
        <Header type="articles" />
        <TitleContainer
          coverImgName={coverImgName}
          category={category}
          title={title}
          subtitle={subtitle}
          tags={tags}
          writerName={writerName}
          createdAt={createdAt}
        />
        <ContentContainer content={content} subtitle={subtitle} />
        <ProfileContainer
          writerProfileImgName={writerProfileImgName}
          writerName={writerName}
          writerBio={writerBio}
        />
      </section>
    );
  }
}
