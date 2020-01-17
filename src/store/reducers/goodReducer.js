import {
  LOAD_GOODS,
  REMOVE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  ADD_TO_CART,
  LOAD_CART
} from "../types";

const initialState = {
  cart: [],
  goods: [],
  cartTotal: 0,
  sumTotal: 0
};

export const goodReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let isAdded = false;
      const updatedCart = [...state.cart].map(good => {
        if (good.name === action.payload.name) {
          isAdded = true;
          good.qty++;
        }
        return good;
      });

      return isAdded
        ? { ...state, cart: updatedCart, cartTotal: state.cartTotal + 1 }
        : {
            ...state,
            cart: [{ ...action.payload, qty: 1 }, ...state.cart],
            cartTotal: state.cartTotal + 1,
            sumTotal:
              Number(state.sumTotal.toFixed(2)) +
              Number(action.payload.price.toFixed(2))
          };
    }
    case LOAD_CART: {
      return {
        ...state,
        cart: [...action.payload.cart],
        cartTotal: action.payload.cartTotal,
        sumTotal: action.payload.sumTotal
      };
    }
    case REMOVE_FROM_CART: {
      console.log(state.sumTotal, action.payload);
      return {
        ...state,
        cart: state.cart.map(good => {
          if (good.name === action.payload.name && good.qty > 0) {
            good.qty = good.qty - 1;
          }
          return good;
        }),
        cartTotal: state.cartTotal - 1,
        sumTotal:
          Number(state.sumTotal.toFixed(2)) -
          Number(action.payload.price.toFixed(2))
      };
    }
    case REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: [],
        cartTotal: 0,
        sumTotal: 0
      };
    }
    case LOAD_GOODS: {
      return {
        ...state,
        goods: action.payload
      };
    }
    default:
      return state;
  }
};
