'use client';

import Image from 'next/image';
import { DefaultCoverImg } from '../../../ui/default/DefaultCoverImg';
import { useState } from 'react';

interface FeedItemThirdContainerProps {
  coverImgUrl: string;
  writerName: string;
}

const FeedItemThirdContainer = ({
  coverImgUrl,
  writerName,
}: FeedItemThirdContainerProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-full relative">
      <div
        className="w-[296px] h-[216px] rounded-[20px] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {coverImgUrl ? (
          <Image
            src={coverImgUrl}
            alt="content"
            width={1280}
            height={700}
            style={{
              objectFit: 'cover',
              objectPosition: 'center center',
              width: '100%',
              height: '100%',
            }}
          />
        ) : (
          <DefaultCoverImg />
        )}
        {isHovered && (
          <div className="absolute inset-0 flex flex-col-reverse bg-black bg-opacity-35 text-white w-[296px] h-[216px] rounded-[20px] overflow-hidden">
            <div className="absolute ml-3 mb-3 w-[100px] h-[30px] px-7 py-[9px] rounded-[20px] border border-white justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-sm font-normal">{writerName}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedItemThirdContainer;
