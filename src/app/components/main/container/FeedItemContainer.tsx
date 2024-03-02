import Link from 'next/link';
import FeedItemFirstContainer from './FeedItemFirstContainer';
import FeedItemSecondContainer from './FeedItemSecondContainer';
import FeedItmeThirdContainer from './FeedItemThirdContainer';

interface FeedItemContainerProps {
  className: string;
  data: FeedList[] | null;
}

const FeedItemContainer = ({ className, data }: FeedItemContainerProps) => {
  if (data?.length && data.length > 0) {
    const feedItems = data.map((item, index) => (
      <div
        key={index}
        className={`${className} relative mt-12 w-full flex justify-center`}
      >
        <Link href={`/articles/${item.articleId}`}>
          <div className="flex justify-between items-center h-[256px] w-[1204px] border-b border-[#808080] pb-[50px]">
            <FeedItemFirstContainer
              category={item.category}
              date={item.createdAt}
            />
            <FeedItemSecondContainer
              tag={item.tags}
              title={item.title}
              truncatedContent={item.truncatedContent}
            />
            <FeedItmeThirdContainer
              coverImgUrl={item.coverImgUrl}
              writerName={item.writerName}
            />
          </div>
        </Link>
      </div>
    ));

    return <>{feedItems}</>;
  } else {
    return (
      <div className="relative my-60 w-full flex justify-center">
        <div className="px-[16%] text-6xl font-semibold text-black justify-center items-center">
          새로운 글을 기다려주세요!
        </div>
      </div>
    );
  }
};

export default FeedItemContainer;
