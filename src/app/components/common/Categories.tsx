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
      className={`${category === selectedCategory ? 'text-teal-500' : 'text-zinc-500'} text-[10px] sm:text-lg md:text-xl lg:text-3xl font-bold cursor-pointer hover:text-teal-500`}
      onClick={onClick}
    >
      <div>{category}</div>
    </div>
  );
};

export default Categories;
