import { ADD_TO_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_FROM_CART } from './actions';

const initialState = {
  cart: {
    items: []
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Handle adding items to cart
      const existingItem = state.cart.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: {
            items: state.cart.items.map(item =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          }
        };
      }
      return {
        ...state,
        cart: {
          items: [...state.cart.items, { ...action.payload, quantity: 1 }]
        }
      };

    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: {
          items: state.cart.items.map(item =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        cart: {
          items: state.cart.items.map(item =>
            item.id === action.payload
              ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
              : item
          )
        }
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: {
          items: state.cart.items.filter(item => item.id !== action.payload)
        }
      };

    default:
      return state;
  }
};

export default reducer;
