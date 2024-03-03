import { useRecoilValue } from 'recoil';
import { categoriesState } from '../recoil/categories';

const useCategoryQueryParam = () => {
  const selectedCategory = useRecoilValue(categoriesState);

  const getCategoryQueryParam = (): string => {
    switch (selectedCategory) {
      case 'Frontend':
        return 'FRONT_END';
      case 'Backend':
        return 'BACK_END';
      case 'Design':
        return 'DESIGN';
      case 'Conference':
        return 'CONFERENCE';
      case 'Life':
        return 'LIFE';
      default:
        return '';
    }
  };

  return getCategoryQueryParam();
};

export default useCategoryQueryParam;
