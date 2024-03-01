interface SubTitleProps {
  subtitle: string;
}

const SubTitle = ({ subtitle }: SubTitleProps) => {
  return (
    <div>
      <div className="text-sm font-bold text-white">{subtitle}</div>
    </div>
  );
};

export default SubTitle;
