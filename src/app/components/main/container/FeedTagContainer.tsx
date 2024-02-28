import FeedTag from '../FeedTag';

interface FeedTagContainerProps {
  taglist: string[];
}

const FeedTagContainer = ({ taglist }: FeedTagContainerProps) => {
  return (
    <div className="w-full mb-5">
      <div className="flex items-center">
        {taglist.map((tag) => (
          <FeedTag key={tag} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default FeedTagContainer;
