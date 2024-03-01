import FeedTag from '../FeedTag';

interface FeedTagContainerProps {
  taglist: string[];
  backgroundstyle?: string;
  textstyle?: string;
}

const FeedTagContainer = ({
  taglist,
  backgroundstyle,
  textstyle,
}: FeedTagContainerProps) => {
  return (
    <div className="mb-5">
      <div className="flex items-center">
        {taglist.map((tag) => (
          <FeedTag
            key={tag}
            tag={tag}
            backgroundstyle={`${backgroundstyle}`}
            textstyle={`${textstyle}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedTagContainer;
