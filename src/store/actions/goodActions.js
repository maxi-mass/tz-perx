import { LOAD_GOODS, REMOVE_FROM_CART, ADD_TO_CART, LOAD_CART } from "../types";

export const addToCart = payload => ({ type: ADD_TO_CART, payload });
export const loadCart = payload => ({ type: LOAD_CART, payload });