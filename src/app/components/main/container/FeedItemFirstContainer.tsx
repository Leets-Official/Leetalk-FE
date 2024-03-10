interface FeedItemFirstContainerProps {
  category: string;
  date: string;
}

const FeedItemFirstContainer = ({
  category,
  date,
}: FeedItemFirstContainerProps) => {
  return (
    <div className="left-0 w-[10%] h-full flex mt-4 mr-[10%] justify-center">
      <div className="w-[100%] h-[53px] left-0 top-0 relative flex justify-center">
        <div className="top-0 absolute text-black text-[10px] sm:text-sm md:text-base lg:text-xl font-bold">
          {category}
        </div>
        <div className="top-[34px] absolute text-black text-[5px] sm:text-[9px] md:text-[10px] lg:text-xs font-medium">
          {date}
        </div>
      </div>
    </div>
  );
};

export default FeedItemFirstContainer;
