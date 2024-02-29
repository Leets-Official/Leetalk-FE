interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <div className="text-black text-3xl font-bold mb-7">{title}</div>;
};

export default Title;
