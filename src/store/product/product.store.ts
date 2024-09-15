import {create} from 'zustand';
import {Product} from './type';
import ProductsService from '../../services/product.service';
import {TProductsSearchParams} from '../../screens/products/types';

interface ProductStoreState {
  //   formData: ProductSearchStore;
  //   selectedProduct: AirlineResultItem[] | null,
  products: Product[];
  product: Product | null;
  loading: boolean;
  getProducts: (searchParams: TProductsSearchParams) => void;
  addProduct: (data: any) => void;
  updateProduct: (data: any) => void;
  deleteProduct: (data: any) => void;
  setProducts: (data: Product[]) => void;

  //   resetFormData: () => void;
}

export const useProductStore = create<ProductStoreState>(set => ({
  // initial state
  product: null,
  products: [],
  loading: false,

  // getProducts: async searchParams => {
  //   const productsService = ProductsService();
  //   set({loading: true});
  //   try {
  //     const products = await productsService.filterProducts(searchParams);
  //     console.log('====================================');
  //     console.log('Products', products);
  //     console.log('====================================');
  //     set({
  //       products: products.map(
  //         product =>
  //           ({
  //             ...product,
  //             quantity: 0,
  //             isChecked: false,
  //           } as Product),
  //       ),
  //       loading: false,
  //     });
  //   } catch (error) {
  //     console.error('Failed to fetch products:', error);
  //     set({loading: false});
  //   }
  // },
  getProducts: () => {
    const products = ProductsService().getAllProducts();
    console.log('Products', products);
    set({loading: true});
    try {
      set(state => ({
        ...state,

        products: products.map(
          product =>
            ({
              ...product,
              quantity: 0,
              isChecked: false,
            } as Product),
        ),
      }));
    } catch (error) {
      console.error('Failed to fetch products:', error);
      set({loading: false});
    }
  },
  setProducts: (products: Product[]) => {
    set(state => ({
      ...state,
      products,
    }));
  },

  addProduct: (data: Product) => {
    set(state => ({
      ...state,
      products: [...state.products, data],
    }));
  },

  updateProduct: (data: Product) => {
    set(state => ({
      ...state,
      product: {
        ...state.product,
        ...data,
      },
      products: state.products.map(product => {
        if (product.id === data.id) {
          return {
            ...product,
            data,
          };
        }
        return product;
      }),
    }));
  },
  deleteProduct: (data: any) => {
    set(state => {
      return {
        ...state,
        products: state.products.filter(product => product.id !== data.id),
      };
    });
  },
}));
