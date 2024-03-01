'use client';

import Footer from '../../../components/layout/Footer';
import Header from '../../../components/layout/Header';
import CategoriesContainer from '../../../components/container/CategoriesContainer';
import FeedItemContainer from '../../../components/main/container/FeedItemContainer';
import { useEffect, useState } from 'react';

export default function MainFeedPage() {
  const [data, setData] = useState<FeedList[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/main/feed`,
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        setData(responseData.data);
      } catch (error) {
        console.error('Error occurred while fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log('out useEffect data', data);
  }, [data]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header type="feed" />
      <div className="flex-grow">
        <CategoriesContainer />
        <FeedItemContainer className="mt-50" data={data} />
      </div>
      <Footer />
    </div>
  );
}
