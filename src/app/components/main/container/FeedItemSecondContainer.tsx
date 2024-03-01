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
    <div className="w-[700px] h-full mt-4">
      <div>
        <FeedTagContainer
          taglist={tag}
          backgroundstyle="mr-5"
          textstyle="text-black text-lg font-medium"
        />
        <div className="text-black text-3xl font-bold mb-7">{title}</div>
        <div className="text-zinc-500 text-base font-medium">
          {truncatedContent}
        </div>
      </div>
    </div>
  );
};

export default FeedItemSecondContainer;
