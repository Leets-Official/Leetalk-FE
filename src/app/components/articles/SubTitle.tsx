interface SubTitleProps {
  subtitle: string | undefined;
}

const SubTitle = ({ subtitle }: SubTitleProps) => {
  return (
    <div>
      <div className="mobile:text-[9px] sm:text-xs md:text-sm font-bold text-white">
        {subtitle}
      </div>
    </div>
  );
};

export default SubTitle;
