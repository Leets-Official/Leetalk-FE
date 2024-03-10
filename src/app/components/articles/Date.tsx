interface DateProps {
  date: string | undefined;
  category: string | undefined;
}

const Date = ({ date, category }: DateProps) => {
  return (
    <div className="flex mobile:gap-1 sm:gap-3 w-full items-center text-white mobile:text-[6.5px] sm:text-xs md:text-sm lg:text-base font-medium">
      <span>{category}</span>
      <span>|</span>
      <span>{date}</span>
    </div>
  );
};

export default Date;
