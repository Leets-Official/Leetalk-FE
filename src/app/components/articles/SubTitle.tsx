interface SubTitleProps {
  subtitle: string | undefined;
}

const SubTitle = ({ subtitle }: SubTitleProps) => {
  return (
    <div>
      <div className="text-sm font-bold text-white">{subtitle}</div>
    </div>
  );
};

export default SubTitle;
