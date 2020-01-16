import { LOAD_GOODS, REMOVE_FROM_CART, ADD_TO_CART, LOAD_CART } from "../types";

const initialState = {
  cart: [],
  cartTotal: 0
};

export const goodReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let isAdded = false;
      const updatedCart = [...state.cart].map(good => {
        if (good.name === action.payload.name) {
          isAdded = true;
          good.qty++;
          return good;
        }
      });
      return isAdded
        ? { ...state, cart: updatedCart, cartTotal: state.cartTotal + 1 }
        : {
            ...state,
            cart: [{ ...action.payload, qty: 1 }, ...state.cart],
            cartTotal: state.cartTotal + 1
          };
    }
    case LOAD_CART: {
      return {
        ...state,
        cart: [...action.payload]
      };
    }
    case REMOVE_FROM_CART: {
      return state;
    }
    case LOAD_GOODS: {
      return state;
    }
    default:
      return state;
  }
};
