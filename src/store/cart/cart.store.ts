import {create} from 'zustand';
import {Product} from '../product/type';
import {CartItemType} from './type';
import uuid from 'react-native-uuid';
import {calculateTotalAmount} from '../../utils/cart';
import {CART_SALES_TYPE} from '../../config/enums/Sales.enum';
interface CartStoreState {
  //   formData: ProductSearchStore;
  //   selectedProduct: AirlineResultItem[] | null,
  carts: CartItemType[];
  maxCart: number;
  activeCartId: string | null;
  isCartOpened: boolean;
  newSaleAdded: boolean;
  isEditing: boolean;
  cartType?: CART_SALES_TYPE;
  products: Array<Product | null>;
  product: Product | null;
  loading: boolean;
  items: number;
  error: null | string;
  openCart: (id: string) => void;
  toggleCart: () => void;
  toggleMinimizedCart: (id: string) => void;
  minimizeCart: (id: string) => void;
  closeActiveCart: (id: string) => void;
  addProductsToCart: (payload: Product[]) => void;
  updateProduct: (payload: any) => void;
  updateCart: (payload: CartItemType) => void;
  adjustProductQuantity: (payload: {id: string; quantity: number}) => void;
  deleteItemFromCart: (itemId: string) => void;
  reduceProduct: (payload: any) => void;
  clearItemInActiveCart: () => void;
  deleteCart: (id: string) => void;
  updateStoreData: (data: any) => void;
  clearCart: () => void;

  //   resetFormData: () => void;
}
const useCartStore = create<CartStoreState>(set => ({
  // initial state
  carts: [],
  maxCart: 3,
  activeCartId: null,
  isCartOpened: false,
  newSaleAdded: false,
  isEditing: false,
  product: null,
  items: 0,
  products: [],
  loading: false,
  error: null,

  openCart: (id: string) =>
    set(state => {
      return {
        ...state,
        activeCartId: id,
        isCartOpened: true,
      };
    }),
  toggleMinimizedCart: (id: string) =>
    set(state => {
      if (state.activeCartId !== null && state.isCartOpened) {
        return {
          ...state,
          error: 'Minimize currently opened cart',
        };
      }
      return {
        ...state,
        activeCartId: id,
        carts: state.carts.map(cart =>
          cart.id === id ? {...cart, isMinimized: false} : cart,
        ),
        isCartOpened: true,
      };
    }),
  toggleCart: () =>
    set(state => {
      return {
        ...state,
        isCartOpened: !state.isCartOpened,
      };
    }),

  minimizeCart: () =>
    set(state => {
      const activeCart = state.carts.find(
        cart => cart.id === state.activeCartId,
      );
      if (activeCart) {
        const updatedCart = {...activeCart, isMinimized: true};
        return {
          ...state,
          carts: state.carts.map(cart =>
            cart.id === updatedCart.id ? updatedCart : cart,
          ),
          isCartOpened: false,
          activeCartId: null,
        };
      } else {
        return {
          ...state,
        };
      }
    }),

  closeActiveCart: () =>
    set(state => {
      return {
        ...state,
        activeCartId: null,
        isCartOpened: false,
      };
    }),

  addProductsToCart: (products: Product[]) =>
    set(state => {
      // Check if there is an active cart

      const activeCart = state.carts.find(
        cart => cart.id === state.activeCartId,
      );
      if (activeCart) {
        // If there is an active cart, check if the product already exists in it
        let updatedItems = [...(activeCart.products as Product[])];

        products.forEach(product => {
          // Check if the product already exists in the cart
          const existingProduct = updatedItems.find(
            item => item.id === product.id,
          );

          if (existingProduct) {
            // Update quantity if the product already exists
            updatedItems = updatedItems.map(item =>
              item.id === product.id
                ? {...item, quantity: (item?.quantity as number) + 1}
                : item,
            );
          } else {
            // Add new product to the cart with quantity 1
            updatedItems = [...updatedItems, {...product, quantity: 1}];
          }
        });
        const updatedCart = {
          ...activeCart,
          products: updatedItems,
          totalPrice: calculateTotalAmount(updatedItems),
        };

        return {
          ...state,
          carts: state.carts.map(cart =>
            cart.id === updatedCart.id ? updatedCart : cart,
          ),
        };
      } else {
        // If there is no active cart, create a new cart with the product
        if (state.carts.length < 3) {
          const id = uuid.v4();
          const newProducts = products.map(product => ({
            ...product,
            quantity: 1,
          }));
          const newCart = {
            id: id as string, // Generate a random cart ID
            products: newProducts,
            isMinimized: false,
            totalPrice: calculateTotalAmount(newProducts),
          };
          return {
            ...state,
            carts: [...state.carts, newCart],
            activeCartId: newCart.id,
            // isCartOpened: true,
          };
        }
        return {
          ...state,
          error: 'Cannot open a new cart. Maximum number of carts reached.',

          // isCartOpened: true,
        };
      }
    }),
  updateProduct: (product: Product) =>
    set(state => {
      // Check if there is an active cart
      const activeCart = state.carts.find(
        cart => cart.id === state.activeCartId,
      );
      if (activeCart) {
        const updatedItems = activeCart?.products?.map(item =>
          item.id === product.id ? {...item, ...product} : item,
        );

        const updatedCart = {
          ...activeCart,
          products: updatedItems,
          totalPrice: calculateTotalAmount(updatedItems as Product[]),
        };

        return {
          ...state,
          carts: state.carts.map(cart =>
            cart.id === updatedCart.id ? updatedCart : cart,
          ),
        };
      }

      return state;
    }),
  updateCart: (payload: CartItemType) =>
    set(state => {
      // Check if there is an active cart
      return {
        ...state,
        carts: state.carts.map(cart =>
          cart.id === payload.id ? {...cart, ...payload} : cart,
        ),
      };
    }),
  adjustProductQuantity: ({id, quantity}: {id: string; quantity: number}) =>
    set(state => {
      // Check if there is an active cart
      const activeCart = state.carts.find(
        cart => cart.id === state.activeCartId,
      );
      if (activeCart) {
        const existingItem = activeCart?.products?.find(item => item.id === id);

        if (existingItem) {
          const updatedQuantity = existingItem.quantity + quantity;
          const updatedItems = activeCart?.products
            ?.map(item =>
              item.id === id ? {...item, quantity: updatedQuantity} : item,
            )
            .filter(items => items.quantity > 0);

          const updatedCart = {
            ...activeCart,
            products: updatedItems,
            totalPrice: calculateTotalAmount(updatedItems as Product[]),
          };

          return {
            ...state,
            carts: state.carts.map(cart =>
              cart.id === updatedCart.id ? updatedCart : cart,
            ),
          };
        }
      }

      return state;
    }),

  deleteItemFromCart: (id: string) =>
    set(state => {
      // Check if there is an active cart
      const activeCart = state.carts.find(
        cart => cart.id === state.activeCartId,
      );
      if (activeCart) {
        const updatedItems = activeCart?.products?.filter(
          item => item.id !== id,
        );
        // Create an updated active cart
        const updatedCart = {
          ...activeCart,
          products: updatedItems,
          totalPrice: calculateTotalAmount(updatedItems as Product[]),
        };

        return {
          ...state,
          carts: state.carts.map(cart =>
            cart.id === updatedCart.id ? updatedCart : cart,
          ),
        };
      }

      return state;
    }),

  clearItemInActiveCart: () =>
    set(state => {
      return {
        ...state,
        carts: state.carts.map(cart => {
          if (cart.id === state.activeCartId) {
            return {
              ...cart,
              products: [],
              totalPrice: 0,
            };
          }
          return cart;
        }),
      };
    }),
  deleteCart: (id: string) =>
    set(state => {
      return {
        ...state,
        carts: state.carts.filter(cart => cart.id !== id),
      };
    }),
  updateStoreData: (data: any) => {
    set(state => ({
      ...state,
      ...data,
    }));
  },

  clearCart: () => set(state => ({...state, carts: [], activeCartId: null})),
  reduceProduct: (payload: Product) =>
    set(state => {
      return {
        products: state.products
          .map(product => {
            if (product && product.id === payload.id) {
              return {
                ...product,
                quantity: Number(product.quantity) - 1,
              };
            }
            return product;
          })
          .filter(product => product && Number(product.quantity) > 0),
      };
    }),
}));

export default useCartStore;
