interface DateProps {
  date: string | undefined;
  category: string | undefined;
}

const Date = ({ date, category }: DateProps) => {
  return (
    <div className="flex gap-3 w-full text-white text-sm font-medium">
      <span>{category}</span>
      <span>|</span>
      <span>{date}</span>
    </div>
  );
};

export default Date;
