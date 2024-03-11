interface CategoriesProps {
  category: string;
  onClick: () => void;
  selectedCategory: string;
}

const Categories = ({
  category,
  onClick,
  selectedCategory,
}: CategoriesProps) => {
  return (
    <div
      className={`${category === selectedCategory ? 'text-[#4A93FF]' : 'text-zinc-500'} text-[8px] mobile:text-[10px] sm:text-lg md:text-xl lg:text-3xl font-bold cursor-pointer hover:text-[#4A93FF]`}
      onClick={onClick}
    >
      <div>{category}</div>
    </div>
  );
};

export default Categories;
