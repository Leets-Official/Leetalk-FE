import Link from 'next/link';
import FeedItemFirstContainer from './FeedItemFirstContainer';
import FeedItemSecondContainer from './FeedItemSecondContainer';
import FeedItmeThirdContainer from './FeedItemThirdContainer';
import useCategoryData from '../../../hooks/useCategoryData';

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
        <div className="w-[75%]">
          <Link
            className="w-full flex items-center justify-center"
            href={`/articles/${item.articleId}`}
          >
            <div className="relative flex items-center mobile:h-[160px] sm:h-[200px] md:h-[256px] w-[100%] border-b border-[#808080] pb-[30px] sm:pb-[50px]">
              <FeedItemFirstContainer
                category={useCategoryData(item.category)}
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
      </div>
    ));

    return (
      <section className="w-full flex flex-col items-center justify-center">
        {feedItems}
      </section>
    );
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
