import React, { useEffect } from "react";
import styles from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  removeAllFromCart,
  loadCart,
  setQtyGoods
} from "../../store/actions/goodActions";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { IMAGE_BASE_URL } from "../../api";
import TextField from "@material-ui/core/TextField";

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
  const qtyChangeHandler = (e, good) => {
    const qty = parseInt(e.target.value);
    if (Number.isInteger(qty) && qty > 0) {
      dispatch(setQtyGoods({ qty: parseInt(qty), name: good.name }));
    }
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
              <div>{good.price} $</div>
              <TextField
                id="outlined-basic"
                label="Количество"
                variant="outlined"
                value={good.qty}
                onChange={e => qtyChangeHandler(e, good)}
              />
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
                Итого: <span>{Number(sumTotal.toFixed(2))} $</span>
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
