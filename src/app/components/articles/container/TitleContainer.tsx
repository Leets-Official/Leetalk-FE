import useCategoryData from '../../../hooks/useCategoryData';
import DefaultDetailCoverImg from '../../../ui/default/DefaultDetailCoverImg';
import FeedTagContainer from '../../main/container/FeedTagContainer';
import Date from '../Date';
import ProfileName from '../ProfileName';
import Share from '../Share';
import SubTitle from '../SubTitle';
import Title from '../Title';
import Image from 'next/image';

interface TitleContainerProps {
  coverImgName: string;
  category: string;
  title: string;
  subtitle: string;
  tags: string[];
  writerName: string;
  createdAt: string;
}

const TitleContainer = ({
  coverImgName,
  category,
  title,
  subtitle,
  tags,
  writerName,
  createdAt,
}: TitleContainerProps) => {
  return (
    <div className="relative top-[100px] max-h-700 pb-[6%] overflow-hidden w-full flex justify-center">
      {coverImgName ? (
        <div className="w-full absolute z-0">
          <Image
            src={coverImgName}
            alt="coverImg"
            width={1920}
            height={700}
            style={{
              objectFit: 'cover',
              objectPosition: 'center center',
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      ) : (
        <DefaultDetailCoverImg />
      )}
      <div className="w-full z-10 px-[16%] flex flex-col">
        <div className="w-full mt-5 flex items-center justify-center">
          <div className="w-[33%] flex justify-start">
            <Date category={useCategoryData(category)} date={createdAt} />
          </div>
          <ProfileName name={writerName} />
          <div className="w-[33%] flex justify-end">
            <Share />
          </div>
        </div>
        <div className="w-full z-10 mt-[20%]">
          <FeedTagContainer
            taglist={tags}
            backgroundstyle="mr-5"
            textstyle="text-white font-medium text-base"
          />
          <Title title={title} />
          <SubTitle subtitle={subtitle} />
        </div>
      </div>
    </div>
  );
};

export default TitleContainer;
