'use client';

import Image from 'next/image';
import { DefaultCoverImg } from '../../../ui/default/DefaultCoverImg';
import { useState } from 'react';
import { IMG_SIZE } from '../../../constants/styles';

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
    <div
      className={`max-w-[224px] max-h-[164px] ${IMG_SIZE} relative ml-auto flex justify-end`}
    >
      <div
        className={`max-w-[224px] max-h-[164px] ${IMG_SIZE} mobile:rounded-[10px] sm:rounded-[20px] overflow-hidden`}
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
          <div
            className={`absolute w-[50%] h-[20%] inset-0 flex flex-col-reverse bg-black bg-opacity-35 text-white ${IMG_SIZE} max-w-[224px] max-h-[164px] mobile:rounded-[10px] sm:rounded-[20px] overflow-hidden`}
          >
            <div className="absolute ml-3 mb-3 w-auto h-[20%] px-7 py-[9px] rounded-[20px] border border-white justify-center items-center gap-2.5 inline-flex text-white text-[7px] sm:text-[9px] md:text-[10px] lg:text-sm font-normal">
              {writerName}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedItemThirdContainer;
