import Image from 'next/image';
import { DefaultCoverImg } from '../../../ui/default/DefaultCoverImg';

interface FeedItmeThirdContainerProps {
  coverImgUrl: string;
  writreName: string;
}

const FeedItmeThirdContainer = ({
  coverImgUrl,
  writreName,
}: FeedItmeThirdContainerProps) => {
  return (
    <div className="h-full">
      <div className="w-[296px] h-[216px] rounded-[20px] overflow-hidden">
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
      </div>
    </div>
  );
};

export default FeedItmeThirdContainer;
