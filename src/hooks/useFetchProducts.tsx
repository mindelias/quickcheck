// hooks/useProducts.js
import {useEffect} from 'react';
import {useProductStore} from '../store/product/product.store';
import ProductsService from '../services/product.service';
import {Product} from '../store/product/type';

export const useProducts = () => {
  const productService = ProductsService();
  const {setProducts} = useProductStore();

  useEffect(() => {
    try {
      const fetchedProducts = [...productService.getAllProducts()];

      setProducts(fetchedProducts as unknown as Product[]);
    } catch (error) {
      console.error('Error initializing or fetching categories:', error);
    } finally {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setProducts]);

  const getProducts = () => {
    const fetchedProducts = [...productService.getAllProducts()];
    console.log('====================================');
    console.log('fetchedProducts', fetchedProducts);
    console.log('====================================');

    setProducts(fetchedProducts as unknown as Product[]);
  };

  return {getProducts};
};
