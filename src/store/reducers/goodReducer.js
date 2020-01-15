import { LOAD_GOODS, REMOVE_FROM_CART, ADD_TO_CART, LOAD_CART } from "../types";

const initialState = {
  cart: []
};

export const goodReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [{ ...action.payload }, ...state.cart]
      }
    }
    case LOAD_CART: {
      return {
        ...state,
        cart: [...action.payload]
      }
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
