import {useState, useEffect} from 'react';
import {Product} from '../store/product/type';
import {TypeSearchParams} from '../components/Product/types';
import {ProductCategory} from '../data/category';

const useFilteredProducts = (
  products: Product[],
  searchParams: TypeSearchParams,
) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let result = products;

    // Filter products based on search parameters
    if (searchParams.title) {
      result = result.filter(product =>
        product.title
          ?.toLowerCase()
          .includes(searchParams?.title?.toLowerCase()!),
      );
    }
    // if (searchParams.category && searchParams.category.value) {
    //   result = result.filter(
    //     product =>
    //       product.category.toLowerCase() ===
    //       searchParams?.category?.value.toLowerCase()!,
    //   );
    // }

    if (searchParams.category) {
      if (
        Array.isArray(searchParams.category) &&
        searchParams.category.length > 0
      ) {
        result = result.filter(product =>
          searchParams?.category?.some(
            (cat: ProductCategory) =>
              product?.category?.value.toLowerCase() ===
              cat.value.toLowerCase(),
          ),
        );
      } else {
        if (searchParams.category?.value) {
          result = result.filter(
            product =>
              product?.category?.value.toLowerCase() ===
              searchParams?.category?.value.toLowerCase(),
          );
        }
      }
    }

    // if (searchParams?.category && searchParams?.category.length > 0) {
    //   result = result.filter(product =>
    //     searchParams?.category?.some(
    //       cat => product?.category?.toLowerCase() === cat.value.toLowerCase(),
    //     ),
    //   );
    // }

    if (searchParams.priceRange) {
      const {min, max} = searchParams.priceRange;
      result = result.filter(
        product =>
          parseInt(product.price as string, 10) >= min &&
          parseInt(product.price as string, 10) <= max,
      );
    }
    if (searchParams.rating) {
      result = result.filter(
        product => (product?.rating as number) >= searchParams?.rating!,
      );
    }

    // Update filtered products state
    setFilteredProducts(result);

    // Handle empty filtered results
    if (result.length === 0) {
      // Perform actions for empty filtered results, e.g., showing a message to the user
      console.log('No products found matching the search criteria.');
    }
  }, [products, searchParams]);

  return filteredProducts;
};

export default useFilteredProducts;
