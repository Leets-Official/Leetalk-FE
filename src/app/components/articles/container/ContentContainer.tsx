import Image from 'next/image';
import React from 'react';
import { TXT_ALIGN } from '../../../constants/styles';

interface ContentContainerProps {
  content: Content[];
  subtitle: string;
}

const ContentContainer = ({ content, subtitle }: ContentContainerProps) => {
  console.log('content', content);
  const textalign = TXT_ALIGN[content[0].alignment];

  const renderContent = (contents: Content, index: number) => {
    switch (contents.type) {
      case 'TEXT':
        return (
          <span
            key={index}
            className={`my-12 text-black mobile:text-[10px] sm:text-xs md:text-sm lg:text-xl mobile:leading-[25px] sm:leading-[30px]  md:leading-[35px] lg:leading-[40px] tracking-wide  ${
              contents.weight === 20 ? `font-bold` : `font-normal`
            }`}
          >
            {contents.data.split('<br>').map((text, i) => (
              <React.Fragment key={i}>
                {i > 0 && <br />}
                {text}{' '}
              </React.Fragment>
            ))}
          </span>
        );
      case 'IMAGE':
        return (
          <div key={index} className="w-full py-12 flex justify-center">
            <Image
              src={contents.data}
              alt="content"
              width={1280}
              height={700}
              style={{
                objectFit: 'cover',
                objectPosition: 'center center',
                width: '90%',
                height: '90%',
              }}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full px-[16%] relative top-[100px] my-[5%]">
      <div className="text-black mobile:text-xs sm:text-sm md:text-base lg:text-xl font-semibold">
        {subtitle}
      </div>
      <div className={`mt-[10%] text-${textalign}`}>
        {content?.map(renderContent)}
      </div>
    </div>
  );
};

export default ContentContainer;
