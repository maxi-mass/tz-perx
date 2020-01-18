import {
  LOAD_GOODS,
  REMOVE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  ADD_TO_CART,
  LOAD_CART
} from "../types";
import { goodsAPI } from "../../api";

export const loadCart = () => dispatch => {
  const saved = JSON.parse(localStorage.getItem("cart") || "[]");
  let cartTotal = 0;
  let sumTotal = 0;
  saved.forEach(good => {
    const qty = good.qty === '' ? 0 : good.qty
    cartTotal += parseInt(qty);
    sumTotal += good.price * good.qty;
  });

  dispatch({ type: LOAD_CART, payload: { cart: saved, cartTotal, sumTotal } });
};

export const addToCart = payload => dispatch => {
  const saved = JSON.parse(localStorage.getItem("cart") || "[]");
  let isAdded = false;

  const updatedCartStorage = saved.map(good => {
    if (good.name === payload.name) {
      isAdded = true;
      good.qty = good.qty + 1;
    }
    return good;
  });

  if (isAdded) {
    localStorage.setItem("cart", JSON.stringify(updatedCartStorage));
  } else {
    saved.push({ ...payload, qty: 1 });
    localStorage.setItem("cart", JSON.stringify(saved));
  }

  dispatch({ type: ADD_TO_CART, payload });
};

export const removeFromCart = payload => dispatch => {
  const saved = JSON.parse(localStorage.getItem("cart") || "[]");
  const filterCartStorage = saved.filter(good => good.name !== payload.name);
  localStorage.setItem("cart", JSON.stringify(filterCartStorage));

  dispatch({ type: REMOVE_FROM_CART, payload });
  dispatch(loadCart());
};

export const removeAllFromCart = () => dispatch => {
  localStorage.setItem("cart", "[]");
  dispatch({ type: REMOVE_ALL_FROM_CART });
};

export const loadGoods = () => async dispatch => {
  const goods = await goodsAPI.getGoods();
  dispatch({ type: LOAD_GOODS, payload: goods });
};

export const setQtyGoods = payload => dispatch => {
  const saved = JSON.parse(localStorage.getItem("cart") || "[]");
  const updatedCartStorage = saved.map(good => {
    if (good.name === payload.name) {
      good.qty = payload.qty;
    }
    return good;
  });
  localStorage.setItem("cart", JSON.stringify(updatedCartStorage));
  dispatch(loadCart());
};
