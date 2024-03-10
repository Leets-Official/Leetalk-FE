interface TitleProps {
  title: string | undefined;
}

const Title = ({ title }: TitleProps) => {
  return <div className="text-white text-5xl font-bold mb-7">{title}</div>;
};

export default Title;
