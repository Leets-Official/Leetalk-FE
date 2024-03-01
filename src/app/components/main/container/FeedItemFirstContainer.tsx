interface FeedItemFirstContainerProps {
  category: string;
  date: string;
}

const FeedItemFirstContainer = ({
  category,
  date,
}: FeedItemFirstContainerProps) => {
  return (
    <div className="left-0 h-full flex mt-4 justify-center">
      <div className="w-[86px] h-[53px] left-0 top-0 relative flex justify-center">
        <div className="top-0 absolute text-black text-xl font-bold">
          {category}
        </div>
        <div className="top-[34px] absolute text-black text-base font-medium">
          {date}
        </div>
      </div>
    </div>
  );
};

export default FeedItemFirstContainer;
