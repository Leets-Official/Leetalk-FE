interface FeedTagProps {
  tag: string;
}

const FeedTag = ({ tag }: FeedTagProps) => {
  return (
    <div className="mr-5">
      <div className="text-black text-lg font-medium"># {tag}</div>
    </div>
  );
};

export default FeedTag;
