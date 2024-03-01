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
            fill={true}
            alt="coverImg"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <DefaultCoverImg />
        )}
      </div>
    </div>
  );
};

export default FeedItmeThirdContainer;
