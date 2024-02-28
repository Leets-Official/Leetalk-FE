'use client';

import { useEffect } from 'react';
import FeedItemFirstContainer from './FeedItemFirstContainer';
import FeedItemSecondContainer from './FeedItemSecondContainer';
import FeedItmeThirdContainer from './FeedItemThirdContainer';

interface FeedItemContainerProps {
  className: string;
}

const FeedItemContainer = ({ className }: FeedItemContainerProps) => {
  useEffect(() => {
    console.log('FeedItemContainer');
  });
  return (
    <div className={`${className} relative mt-12 w-full flex justify-center`}>
      <div className="flex justify-between items-center h-[256px] w-[1204px] border-b border-[#808080] pb-[50px]">
        <FeedItemFirstContainer category={''} date={''} />
        <FeedItemSecondContainer tag={[]} title={''} truncatedContent={''} />
        <FeedItmeThirdContainer coverImgUrl={''} writreName={''} />
      </div>
    </div>
  );
};

export default FeedItemContainer;
