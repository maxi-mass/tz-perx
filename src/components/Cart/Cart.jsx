import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  removeAllFromCart,
  loadCart
} from "../../store/actions/goodActions";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { IMAGE_BASE_URL } from "../../api";

const Cart = () => {
  const sumTotal = useSelector(state => state.good.sumTotal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCart());
  }, []);

  const cart = useSelector(state => state.good.cart);

  const removeHandler = good => {
    dispatch(removeFromCart(good));
  };

  return (
    <div>
      <h2>Корзина</h2>
      <ul className={styles.cart_list}>
        {cart.map(good => {
          return (
            <li key={good.name} className={styles.cart_item}>
              <div>
                <img src={IMAGE_BASE_URL + good.image} alt="image" />
              </div>
              <div>{good.name}</div>
              <div>{good.price}</div>
              <div>{good.qty}</div>
              <div style={{ cursor: "pointer" }}>
                <HighlightOffIcon onClick={() => removeHandler(good)} />
              </div>
            </li>
          );
        })}
        {cart.length > 0 && (
          <>
            <li className={styles.cart_sum}>
              <div>
                Итого: <span>{Number(sumTotal.toFixed(2))}</span>
              </div>
            </li>
            <li>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<DeleteIcon />}
                onClick={() => dispatch(removeAllFromCart())}
              >
                Очистить корзину
              </Button>
            </li>
          </>
        )}
        {cart.length === 0 && <strong>Корзина пуста</strong>}
      </ul>
    </div>
  );
};

export default Cart;
