interface DateProps {
  date: string;
  category: string;
}

const Date = ({ date, category }: DateProps) => {
  return (
    <div className="flex gap-[11%] text-white text-base font-medium">
      <span>{category}</span>
      <span>|</span>
      <span>{date}</span>
    </div>
  );
};

export default Date;
