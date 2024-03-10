'use client';

import Categories from '../common/Categories';
import { CATEGORIES } from '../../constants/categories';
import { categoriesState } from '../../recoil/categories';
import { useRecoilState } from 'recoil';

const CategoriesContainer = () => {
  const [categories, setCategories] = useRecoilState(categoriesState);

  const selectCategories = (category: string) => {
    setCategories(category);
  };

  return (
    <div className="relative mt-[30%] mb-[10%] md:mt-44 md:mb-24 w-[75%] flex justify-center item-center">
      <div className="w-full flex justify-between">
        {CATEGORIES.map((category) => (
          <Categories
            key={category}
            category={category}
            onClick={() => selectCategories(category)}
            selectedCategory={categories}
          />
        ))}
      </div>
    </div>
  );
};
export default CategoriesContainer;
