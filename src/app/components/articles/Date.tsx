interface DateProps {
  date: string;
  category: string;
}

const Date = ({ date, category }: DateProps) => {
  return (
    <div className="top-[34px] absolute text-black text-base font-medium">
      {date}
      {category}
    </div>
  );
};

export default Date;
