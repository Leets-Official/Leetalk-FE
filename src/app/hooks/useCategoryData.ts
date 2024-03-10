const useCategoryData = (category: string) => {
  const getCategoryData = (): string => {
    switch (category) {
      case 'FRONT_END':
        return 'Frontend';
      case 'BACK_END':
        return 'Backend';
      case 'DESIGN':
        return 'Design';
      case 'CONFERENCE':
        return 'Conference';
      case 'LIFE':
        return 'Life';
      default:
        return '';
    }
  };

  return getCategoryData();
};

export default useCategoryData;
