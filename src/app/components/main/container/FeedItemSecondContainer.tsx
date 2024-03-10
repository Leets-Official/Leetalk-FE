import FeedTagContainer from './FeedTagContainer';

interface FeedItemSecondContainerProps {
  tag: string[];
  title: string;
  truncatedContent: string;
}

const FeedItemSecondContainer = ({
  tag,
  title,
  truncatedContent,
}: FeedItemSecondContainerProps) => {
  return (
    <div className="w-[45%] h-full mt-4 mb-2 overflow-hidden">
      <div>
        <FeedTagContainer
          taglist={tag}
          backgroundstyle="mr-1"
          textstyle="text-black font-medium text-[5px] sm:text-[6px] md:text-[10px] lg:text-lg"
        />
        <div className="text-black text-xs sm:text-xl md:text-2xl lg:text-3xl font-bold mb-7">
          {title}
        </div>
        <div className="text-zinc-500 text-[8px] sm:text-sm md:text-sm lg:text-base font-medium">
          {truncatedContent}
        </div>
      </div>
    </div>
  );
};

export default FeedItemSecondContainer;
