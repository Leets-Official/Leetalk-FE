interface TitleProps {
  title: string | undefined;
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className="text-white mobile:text-base sm:text-2xl lg:text-5xl font-bold mb-7">
      {title}
    </div>
  );
};

export default Title;
