interface FeedTagProps {
  tag: string;
  textstyle?: string;
  backgroundstyle?: string;
}

const FeedTag = ({ tag, textstyle, backgroundstyle }: FeedTagProps) => {
  return (
    <div className={`${backgroundstyle}`}>
      <div className={`${textstyle}`}># {tag}</div>
    </div>
  );
};

export default FeedTag;
