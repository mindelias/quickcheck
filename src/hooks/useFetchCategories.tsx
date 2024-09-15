import {useEffect, useState} from 'react';
import CategoryService from '../services/category';

export const useProductCategories = (refetch = false) => {
  //   const realm = useRealm();
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const categoryService = CategoryService();

  useEffect(() => {
    try {
      categoryService.initializeDefaultCategories();
      const fetchedCategories = [...categoryService.getAllCategories()];
      setCategories(fetchedCategories);
    } catch (error) {
      console.error('Error initializing or fetching categories:', error);
    } finally {
      setIsLoading(false);
      //   realm.close(); // Close the Realm when done
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch]);

  const getCategories = () => {
    const fetchedCategories = [...categoryService.getAllCategories()];
    setCategories(fetchedCategories);
  };

  return {categories, getCategories, isLoading};
};
